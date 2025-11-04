import express from "express";
import "./config/db.js";
import userRoutes from "./route/userRoutes.js";
import iaRoutes from "./route/iaRoutes.js";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use("/user", userRoutes);
app.use("/ia", iaRoutes);

//savoir si le server ce connect
app.listen(PORT, () => console.log(`tout est ok sur le port ${PORT}`));
