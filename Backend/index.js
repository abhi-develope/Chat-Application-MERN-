import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()


dotenv.config(); 

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;   

try {
    mongoose.connect(URI);
    console.log("connected to mongodb");
    
} catch (error) {
    console.log(error);
    
}



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})