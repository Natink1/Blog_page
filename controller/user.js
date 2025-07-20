import users from "../models/user";
import { userSchema } from "../Schema/user";

export const login = async (req, res) => {

    try{
  userSchema.parse(req.body);

  const { email, password, name } = req.body;
  const user = await post.findById(id);

  if(user){
    

  }}
 catch (error) {
    res.status(400).json({
      message: "Enter User Cridential;",
      error: error.message,
  })
};

export const signup = async (req, res) => {};
