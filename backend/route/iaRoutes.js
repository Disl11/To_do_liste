import { Router } from "express";
import { iaController } from "../controller/iaControllers.js";

const router = Router();

router.post("/ask", iaController);

export default router;
