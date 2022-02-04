const User = require("../models/User.js");

const getUserDetails = async (req, res, next) => {
	res.status(200).json(req.user);
};


const getUserById = async (req, res, next) => {
	const user = await User.findById(req.params._id).populate("notes");
	if (user) {
		res.status(200).json(user);
	} else {
		res.status(204).json({
			error: "No such User",
		});
	}
};

const deleteUser = async (req, res, next) => {
	const user = await User.findByIdAndDelete({ _id: req.params.id });
	if (user) {
		res.status(200).json({
			message: "User deleted succesfully",
		});
	} else {
		res.status(205).json({
			error: "Error in deletion",
		});
	}
};

const getAllUsers = async (req, res, next) => {
	const users = await User.find({}).select("-password -_id ");
	if (users) {
		res.status(200).json(users);
	} else {
		res.status(404).json({
			error: "No users registered",
		});
	}
};

module.exports = {
	getUserDetails,
	getUserById,
	deleteUser,
	getAllUsers,
};
