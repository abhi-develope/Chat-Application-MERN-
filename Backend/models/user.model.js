import mongoose from "mongoose";

const userSchema  = mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true 
    }, 
   confirmPassword: {
        type: String,
        required: true 
    }, 
},{timestamps: true})

const User = mongoose.model("user",userSchema)

export default User 