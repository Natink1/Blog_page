import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },

  password: String,
  createdAt: { type: Date, default: Date.now },
  role: {
    type: String, // The type of the field will be String
    required: true, // Make it a required field
    enum: ["ADMIN", "USER"], // This is where you define the enum values
    default: "USER", // Set
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
export default mongoose.model("User", userSchema);
