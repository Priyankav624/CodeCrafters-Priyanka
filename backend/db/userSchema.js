import mongoose from "mongoose";
import { Food } from "./index.js"

const user = mongoose.Schema({
    username:String,
    location:String,
    email:String,
    password:String,
    date:{
        type:Date,
        default:Date.now
    }
    // cartItems:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Food' }]
})

export default mongoose.model('User',user);