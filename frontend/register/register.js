import { registerUser } from "../api/api.js";

export function userRegister() {
	console.log("✅ register.js chargé !");
	const form = document.getElementById("register");

	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		const name = document.getElementById("name")?.value?.trim() ?? "";
		const username =
			document.getElementById("username")?.value?.trim() ?? "";
		const mail = document.getElementById("mail")?.value?.trim() ?? "";
		const password =
			document.getElementById("password")?.value?.trim() ?? "";

		const formUser = { name, username, mail, password };
		console.log("Données envoyées :", formUser);
		try {
			const result = await registerUser(formUser);
			if (result) {
				alert("Register done !");
				console.log(result);
			} else {
				alert("erreur: aucune réponse du serveur");
			}
		} catch (err) {
			alert(err.message || "erreur connection serve impossible");
		}
	});
}
userRegister();
