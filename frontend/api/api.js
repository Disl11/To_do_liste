export async function registerUser(formUser) {
	try {
		const response = await fetch("http://localhost:3000/user", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(formUser),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(
				errorData.message || "erreur lors de l'inscription"
			);
		}
		const users = await response.json();
		return users;
	} catch (err) {
		console.error("Erreur dans le register: ", err);
		throw err;
	}
}

export async function loginUser(formLogin) {
	try {
		const response = await fetch("http://localhost:3000/user/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formLogin),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Erreur lors de la connexion");
		}

		return await response.json(); // { token, user }
	} catch (err) {
		console.error("Erreur dans loginUser:", err);
		throw err;
	}
}
