import User from "../models/user.model.js";

export const signup = (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password do not match" });
    }
    const user = User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }
    const newUser = new User({
      fullname,
      email,
      password,
    });
    newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
  }
};
