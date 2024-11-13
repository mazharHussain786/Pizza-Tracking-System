import mongoose from "mongoose";



const orderSchema=new mongoose.Schema({

    customerId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    items:
    {
        type:Object,
        required:[true,"Items are required"]
    },
    address:
    {
        type:String,
        required:[true,"Adress is Compulsory"]
    },
    phone:
    {
        type:String,
        required:[true,"Phone number is Required"]
    },
    paymentType:
    {
        type:String,
        default:'COD'
    },
    status:
    {
        type:String,
        default:'Order Placed'
    },
    
},{timestamps:true})

const orderModel=mongoose.model("orders",orderSchema)

export {orderModel}

