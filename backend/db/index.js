import mongoose from "mongoose";

const foodItemsSchema = mongoose.Schema({
    CategoryName: String,
    name: String,
    img:String,
    options: Array ,
    description: String
})

const foodCategorySchema = mongoose.Schema({
    CategoryName: String
})

 export const Category =  mongoose.model('food_category' , foodCategorySchema);

//  const Category = mongoose.model('food_category' , foodCategorySchema);
 export const Food =  mongoose.model('food_items' , foodItemsSchema);



