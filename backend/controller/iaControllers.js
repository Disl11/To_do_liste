import ollama from "ollama";

export async function iaController(req, res) {
	const { question } = req.body;

	try {
		const response = await ollama.chat({
			model: "mistral",
			messages: [{ role: "user", content: question }],
		});

		const answer = response.message.content;
		res.status(200).json({ answer });
	} catch (err) {
		console.error(err);
		res.status(500).json({
			error: err,
			message: "une erreur est survenue sur le serveur",
		});
	}
}
