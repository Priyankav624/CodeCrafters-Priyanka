import mongoose from "mongoose";

const user = mongoose.Schema({
    username:String,
    location:String,
    email:String,
    password:String,
    date:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model('User',user);