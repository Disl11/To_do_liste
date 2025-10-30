import { getUser, addUser, getUserById } from "../models/user.js";

//* READ
export async function getUserControlleur(req, res) {
	try {
		const users = await getUser();

		if (users.length === 0) {
			return res.status(400).json({ message: "User don't exist" });
		}

		return res.status(200).json(users);
	} catch (err) {
		return res.status(500).json(err.message);
	}
}

export async function getUserByIdControlleur(req, res) {
	try {
		const userList = await getUser();
		const user = userList.find((u) => u._id == req.params.id);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		return res.status(200).json(await getUserById(user._id));
	} catch (e) {
		return res.status(500).json({ message: e.message });
	}
}

//* CREATE
export async function addUserControlleur(req, res) {
	try {
		const sucess = await addUser(req.body);
		if (!sucess) {
			return res.status(409).json({ message: "email already exist" });
		}

		return res.status(200).json({ message: "Resgistration Successful" });
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
}
