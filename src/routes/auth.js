const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-token";

// Register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send("Email already registered. Please login.");
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).send("User registered successfully.");
  } catch (error) {
    res.status(500).send("Registration failed.");
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).send("Invalid username or password.");
    }

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
      expiresIn: "1h"
    });

    res.json({ token });
  } catch (error) {
    res.status(500).send("Login failed.");
  }
});

module.exports = router;
