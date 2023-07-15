import { z } from "zod";

// Schema to validate request body for userRegister
const userRegisterSchema = z
  .object({
    username: z.string().min(1, "Username is Required").trim(),
    email: z.string().email("Enter a valid Email").min(1, "Email is Required").trim(),
    password: z.string().min(1, "Password is Required").trim(),
  })
  .strict();

export default userRegisterSchema;
