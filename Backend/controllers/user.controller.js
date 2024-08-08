import createTokenAndSaveCookie from "../jwt/generateToken.js";
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
   if (newUser) {
    createTokenAndSaveCookie(newUser._id, res)
       res.status(201).json({ message: "User created successfully", newUser });
   }
  } catch (error) {
    console.log({error: "internal server error"});
  }
};

export const login = async(req, res)=> {
    try {
        const {email, password} = req.body;
        const user = User.findOne({email})
        const isMatch = bcrypt.compare(password, user.password)
        if(!user || !isMatch) {
            return res.status(400).json({error: "invalid user credential"});
        }
        createTokenAndSaveCookie(user._id, res);
        res.status(200).json({message: "User logged in successfully", user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email
        }});
        
    } catch (error) {
        console.log({error: "internal server error"});
        
    }
}
