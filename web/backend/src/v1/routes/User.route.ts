import express, { type Router } from "express";
import { userController } from "../controllers";

const router: Router = express.Router();

router.post("/", userController.register);

export default router;
