import express from "express";
const router = express.Router();
import User from "../db/userSchema.js"

router.post('/createuser',async (req,res)=>{
    const { username , password , email , location } = req.body;
    const user = await User.findOne({username})
    if(user){
        res.status(403).json({ err : "user already exists"})
    } else {
        const newUser = new User({username , password , email , location});
        await newUser.save();
        res.json({message: "user created successfully"}).status(201);
    }
})

router.post("/login" , async (req , res)=>{
    const { username , password } = req.body;
    const user = await User.findOne({username , password })
    if(user){
        // const token = jwt.sign({ id: user._id } , secret , {expiresIn: "1hr"});
        res.json({message: "logged in successfully" })
    } else {
        res.json({err: "invalid credentials"}).status(403)
    }
})

export default router;