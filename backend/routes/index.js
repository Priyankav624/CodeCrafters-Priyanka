import express from "express";
const router = express.Router();
import { authenticateJwt, SECRET } from "../middlewares/auth.js";
import User from "../db/userSchema.js"
import jwt from 'jsonwebtoken';
import  {Food , Category}  from "../db/index.js"
// import Category from "../db/category.js";


router.get("/me", authenticateJwt, async (req, res) => {
    const user = await User.findOne({ username: req.user.username });
    if (!user) {
      res.status(403).json({msg: "Admin doesnt exist"})
      return
    }
    res.json({
        username: user.username
    })
});

router.post('/createuser',async (req,res)=>{
    const { username , password , email , location } = req.body;
    const user = await User.findOne({username})
    if(user){
        res.status(403).json({ err : "user already exists"})
    } else {
        const newUser = new User({username , password , email , location});
        await newUser.save();
        const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
        res.json({message: "user created successfully" , token}).status(201);
    }
})

router.post("/login" , async (req , res)=>{
    const { username , password } = req.body;
    const user = await User.findOne({username , password })
    if(user){
        const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
        res.json({message: "logged in successfully" })
    } else {
        res.json({err: "invalid credentials"}).status(403)
    }
})

router.get("/foodData" , async (req , res) => {
    // const food = await Food.find({});
    const [food, category] = await Promise.all([Food.find({}), Category.find({})]);
    // console.log(food, category);
    res.json({ food, category });
})

export default router;