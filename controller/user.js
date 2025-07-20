import user from "../models/user";
import users from "../models/user";
import { userSchema } from "../Schema/user";
import * as jwt from "jsonwebtoken";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { userSchema } from "../validations/userValidation.js"; // Zod schema (optional)
import User from "../models/user.js"; // Mongoose model

export const login = async (req, res) => {
  try {
    const validatedData = userSchema.parse(req.body);
    const { email, password } = validatedData;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" }); // Add return
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET, // Secret key (store in .env)
      { expiresIn: "1h" } // Optional: Token expiry
    );

    res.json({ token, userId: user._id });
  } catch (error) {
    res.status(400).json({
      message: "Login failed",
      error: error.message, // Only expose error message in development
    });
  }
};

export const createUser = async (req, res) => {
  userSchema.parse(req.body);

  const { email, password, name } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: "User already exists" });
  }
};
