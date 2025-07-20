import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: Integer,
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("users", userSchema);
