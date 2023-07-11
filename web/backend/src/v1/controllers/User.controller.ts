import bcrypt from "bcrypt";
import { type NextFunction, type Request, type Response } from "express";
import createError from "http-errors";
import { v4 as uuidv4 } from "uuid";
import { ZodError } from "zod";
import { addUser, addNamespaceTableToDB, getAllUsersWithEmail, getAllUsersWithUsername } from "../../jsonDB/Functions";
import userRegisterSchema from "../schema/UserRegister.schema";

const userController = {
  async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sanitizedReqBody = await userRegisterSchema.parseAsync(req.body);
      const hashedPassword = await bcrypt.hash(sanitizedReqBody.password, 11);
      const user = { id: uuidv4(), ...sanitizedReqBody, password: hashedPassword };
      // JSON DB adds the user if username/email does not exists in DB
      const allUsersWithUsername = await getAllUsersWithUsername(sanitizedReqBody.username);
      const allUsersWithEmail = await getAllUsersWithEmail(sanitizedReqBody.email);
      if (allUsersWithUsername.length === 0 && allUsersWithEmail.length === 0) {
        const addedUser = await addUser(user);
        console.log(addedUser);
        await addNamespaceTableToDB(sanitizedReqBody.username);
        res.status(201).send({ url: `${req.protocol}://${req.headers.host as string}${req.baseUrl}/${sanitizedReqBody.username}`, id: addedUser.id });
        return;
      }
      next(createError.Conflict("User Already Exists"));
    } catch (err) {
      console.log(err);
      if (err instanceof ZodError) {
        console.log(err);
        next({ status: createError.BadRequest().status, message: err.issues });
        return;
      }
      next(createError.InternalServerError());
    }
  },
};

export default userController;
