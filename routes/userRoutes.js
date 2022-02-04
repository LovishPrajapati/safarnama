const express = require("express");
const router = express.Router();

const {
	getUserDetails,
	getUserById,
	deleteUser,
	getAllUsers,
} = require("../controllers/userControllers");
const { protect, admin } = require("../controllers/authControllers");

router
	.route("/profile")
	.get(protect, getUserDetails)

router.get("/", protect, admin, getAllUsers);
router
	.route("/:id")
	.get(protect, admin, getUserById)
	.delete(protect, admin, deleteUser);

module.exports = router;
