 import jwt from "jsonwebtoken"
 import User from "../models/user.model.js"

 const secureRoute = async (req, res, next)=> {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "no token, authorization denied"})
        }
        const decoded = jwt.verify(token, process.env.JWT_token);
        if(!decoded){
            return res.status(401).json({error: "invalid token"});
        }
        const user = await User.findById(decoded.userId).select("-password");
        if (!user){
            return res.status(401).json({error: "No user found"});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("error in secure route:" + error);
        
    }
 }

 export default secureRoute;