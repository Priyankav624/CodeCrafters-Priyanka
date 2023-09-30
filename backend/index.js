import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hii');
})

app.listen(3000,()=>{
    console.log("server is running in port 3000");
})

const connectionURL = 'mongodb+srv://sanjay:sanjay@cluster0.bxwet6a.mongodb.net/swiggy'

mongoose.connect(connectionURL , {  dbName:"swiggy" })

const db = mongoose.connection;

db.once('open',()=>{
    console.log(' db connected');
})