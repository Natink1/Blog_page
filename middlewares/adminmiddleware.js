export const adminmiddleware = async (req, res, next) => {
  const user = req.user;
  console.log(user);

  if (!user || user.role !== "ADMIN") {
    return res.status(403).send("Access denied.");
  }

  next();
};
