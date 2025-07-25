import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { userSchema, loginSchema } from "../Schema/userValidation.js"; // Zod schema (optional)
import User from "../models/user.js"; // Mongoose model
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
  try {
    const validatedData = loginSchema.parse(req.body);
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
      { id: user._id, role: user.role },
      process.env.JWT_SECRET, // Secret key (store in .env)
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" } // Optional: Token expiry
    );

    res.json({ token, userId: user._id, userName: user.name });
  } catch (error) {
    res.status(400).json({
      message: "Login failed",
      error: error.message, // Only expose error message in development
    });
  }
};

export const createUser = async (req, res) => {
  const validatedData = userSchema.parse(req.body);
  const { name, email, password } = validatedData;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Registration failed", message: error.message });
  }
};
