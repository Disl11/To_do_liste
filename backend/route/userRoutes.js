import { Router } from "express";
import {
	addUserControlleur,
	getUserByIdControlleur,
	getUserControlleur,
} from "../controller/userController.js";

const router = Router();

router.get("/", getUserControlleur);
router.get("/:id", getUserByIdControlleur);
router.post("/", addUserControlleur);

export default router;
