import users from "../models/user";
import { userSchema } from "../Schema/user";

export const login = async (req, res) => {
  try {
    userSchema.parse(req.body);

    const { email, password } = req.body;

    if (user) {
    }
  } catch (error) {
    res.status(400).json({
      message: "Enter User Cridential;",
      error: error.message,
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
