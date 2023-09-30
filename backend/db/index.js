import mongoose from "mongoose";

const foodCategorySchema = mongoose.Schema({
    CategoryName: String
})

const foodItemsSchema = mongoose.Schema({
    CategoryName: String,
    name: String,
    img:String,
    options: Array ,
    description: String
})

//  const Category = mongoose.model('food_category' , foodCategorySchema);
 export default mongoose.model('food_items' , foodItemsSchema);



