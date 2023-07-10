import axios from "axios";
import bcrypt from "bcrypt";
import { type NextFunction, type Request, type Response } from "express";
import createError from "http-errors";
import { v4 as uuidv4 } from "uuid";
import { ZodError } from "zod";
import userRegisterSchema from "../schema/UserRegister.schema";

const userController = {
  async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const sanitizedReqBody = await userRegisterSchema.parseAsync(req.body);
      const hashedPassword = await bcrypt.hash(sanitizedReqBody.password, 11);
      const newUser = { id: uuidv4(), ...sanitizedReqBody, password: hashedPassword };
      // JSON DB adds the user if username/email does not exists in DB
      const usernameExists = await axios.get(`http://localhost:5001/users?username=${sanitizedReqBody.username}`);
      const emailExists = await axios.get(`http://localhost:5001/users?email=${sanitizedReqBody.email}`);
      if (usernameExists.data.length === 0 && emailExists.data.length === 0) {
        const resp = await axios.post("http://localhost:5001/users", { ...newUser });
        console.log(resp);
        res.send(newUser);
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
