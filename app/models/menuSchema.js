import mongoose from "mongoose";

const MenuSchema=new mongoose.Schema(
    {
        name:{type:String,required:true} ,
        image:{type:String,required:true} ,
        price:{type:Number,required:true} ,
        size:{type:String,required:true} 
    }
)

// const menuData = [
//     {
//         name: "Pepperoni Pizza",
//         image: "pizza.png",
//         price: 12.99,
//         size: "Large"
//     },
//     {
//         name: "Margherita Pizza",
//         image: "pizza.png",
//         price: 10.99,
//         size: "Medium"
//     },
//     {
//         name: "BBQ Chicken Pizza",
//         image: "pizza.png",
//         price: 14.99,
//         size: "Small"
//     },
//     {
//         name: "Veggie Pizza",
//         image: "pizza.png",
//         price: 11.99,
//         size: "Large"
//     },
//     {
//         name: "Hawaiian Pizza",
//         image: "pizza.png",
//         price: 13.99,
//         size: "Medium"
//     },
//     {
//         name: "Buffalo Chicken Pizza",
//         image: "pizza.png",
//         price: 15.49,
//         size: "Small"
//     },
//     {
//         name: "Meat Lovers Pizza",
//         image: "pizza.png",
//         price: 16.99,
//         size: "Large"
//     },
//     {
//         name: "Supreme Pizza",
//         image: "pizza.png",
//         price: 17.99,
//         size: "Medium"
//     }
// ];


const Menu=mongoose.model('Menu',MenuSchema);
// const insert=async()=>
// {
//     try{
//         await Menu.insertMany(menuData)
//         console.log("data is inserted")
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
   
// }



export{Menu}