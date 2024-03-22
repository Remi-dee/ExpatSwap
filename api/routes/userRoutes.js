const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,

  getAllUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/allUsers", protect, getAllUsers);

module.exports = router;
