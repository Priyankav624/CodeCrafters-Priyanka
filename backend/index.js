import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from './routes/index.js'

const app = express();

app.use(cors())
app.use(express.json());

app.use('/api/', routes)

app.use(express.static("public"));
app.get('/*',(req , res) =>{
    res.sendFile(path.join(__dirname,'/public/index.html'));
})


app.listen(3000,()=>{
    console.log("server is running in port 3000");
})

const connectionURL = 'mongodb+srv://sanjay:sanjay@cluster0.bxwet6a.mongodb.net/swiggy'

mongoose.connect(connectionURL , {  dbName:"swiggy" })

const db = mongoose.connection;

db.once('open',async ()=>{
    console.log(' db connected');
    // const Category = await Food.find({});
    // console.log(food)

})