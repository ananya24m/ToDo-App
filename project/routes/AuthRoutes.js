const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User"); // Adjust the path based on your project structure

router.post("/register", (req, res, next) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err) => {
    if (err) {
      return res.json({ success: false, message: "Registration failed. " + err.message });
    }
    res.json({ success: true, message: "Registration successful" });
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ success: true, message: "Login successful" });
});

router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed", error: err.message });
    }
    res.json({ message: "Logout successful" });
  });
});
module.exports = router;
