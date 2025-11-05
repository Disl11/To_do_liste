import { Router } from "express";
import {
	addUserControlleur,
	getUserByIdControlleur,
	getUserControlleur,
	loginUserControlleur,
} from "../controller/userController.js";
import { verifyToken } from "../middlewares/authMiddelware.js";

const router = Router();

router.get("/", getUserControlleur);
router.get("/:id", getUserByIdControlleur);
router.get("/", verifyToken, getUserControlleur);
router.get("/:id", verifyToken, getUserByIdControlleur);

router.post("/login", loginUserControlleur);
router.post("/", addUserControlleur);

export default router;
