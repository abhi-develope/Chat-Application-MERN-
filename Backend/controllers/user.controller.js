import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password do not match" });
    }

    // Hashing the password
    const hashPassword = await bcrypt.hash(password, 10);
    const user =await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }
    const newUser = await new User({
      fullname,
      email,
      password: hashPassword,
    });
   await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
  }
};
