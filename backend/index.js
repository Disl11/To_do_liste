import express from "express";
import ollama from "ollama";
import "./config/db.js";
import userRoutes from "./route/userRoutes.js";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = 3000;

const limiter = rateLimit({
	window: 15 * 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
});
app.use(limiter);

app.use("/user", userRoutes);

//savoir si le server ce connect
app.listen(PORT, () => console.log(`tout est ok sur le port ${PORT}`));

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
