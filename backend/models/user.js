import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
	name: { type: String },
	username: { type: String },
	email: { type: String },
	password: { type: String },
	role: { type: String, default: "user" },
});

const User = mongoose.model("User", userSchema);

//* READ
export const getUser = async () => await User.find();
export const getUserById = async (id) => await User.findById(id);

//* CREAT
export async function addUser(newUser) {
	const userExist = await User.findOne({ email: newUser.email });
	if (userExist) {
		return false;
	}

	const allRegxPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

	if (!allRegxPassword.test(newUser.password)) {
		throw new Error(
			"Password must contain one uppercase , lowercase, one number, and least 8 characters long "
		);
	}

	const saltRounds = 10;
	const password_hash = await bcrypt.hash(newUser.password, saltRounds);

	const user = new User({
		...newUser,
		password: password_hash,
	});

	await user.save();
	return true;
}
