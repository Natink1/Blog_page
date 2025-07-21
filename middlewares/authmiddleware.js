import jwt from "jsonwebtoken";


export const authmiddleware = async (req, res, next) => {
  try {
     const token = req.header("Authorization");
    console.log("Token:" + token);

    if (!token) {
      return res.status(403).send("Access denied.");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch {
    res.status(400).send("Invalid token");
  }
};
