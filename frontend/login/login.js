import { loginUser } from "../api/api.js"; // fonction qui fait le fetch vers /user/login

export function userLogin() {
	const form = document.getElementById("loginForm");

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		// Récupérer les valeurs du formulaire
		const username =
			document.getElementById("username")?.value?.trim() ?? "";
		const password =
			document.getElementById("password")?.value?.trim() ?? "";

		const formLogin = { username, password };
		console.log("Données envoyées :", formLogin);

		try {
			const result = await loginUser(formLogin);

			if (result.token) {
				// Stocker le token et infos utilisateur dans localStorage
				localStorage.setItem("token", result.token);
				localStorage.setItem("user", JSON.stringify(result.user));

				alert("Connexion réussie !");
				console.log("Utilisateur connecté :", result.user);

				// Redirection vers une page protégée
				window.location.href = "/frontend/main.html";
			} else {
				alert("Nom d'utilisateur ou mot de passe incorrect !");
			}
		} catch (err) {
			alert(err.message || "Erreur de connexion au serveur");
			console.error(err);
		}
	});
}

// ⚠ N'oublie pas d'appeler la fonction pour attacher l'event listener
userLogin();
