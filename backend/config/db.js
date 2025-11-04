import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

mongoose
	.connect(MONGO_URI)
	.then(() => console.log("Connect a la bdd Todolist"))
	.catch((err) => console.error("erreur de connexion:", err));
