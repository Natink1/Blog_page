import express from "express";
import mongoose from "mongoose";
import rootRouter from "./routes/root.js";
// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/Blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
// Basic route

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api", rootRouter);

// Start the server

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
