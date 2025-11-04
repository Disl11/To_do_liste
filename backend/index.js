import express from "express";
import ollama from "ollama";
import "./config/db.js";
import userRoutes from "./route/userRoutes.js";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use("/user", userRoutes);

// app.post("/api/ask", async (req, res) => {
// 	const { question } = req.body;

// 	try {
// 		const response = await ollama.chat({
// 			model: "mistral",
// 			messages: [{ role: "user", content: question }],
// 		});

// 		const answer = response.message.content;
// 		res.status(200).json({ answer });
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).json({
// 			error: err,
// 			message: "une erreur est survenue sur le serveur",
// 		});
// 	}
// });

//savoir si le server ce connect
app.listen(PORT, () => console.log(`tout est ok sur le port ${PORT}`));
