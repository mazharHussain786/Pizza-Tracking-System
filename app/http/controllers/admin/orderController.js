import { orderModel } from "../../../models/orderSchema.js";

const adminOrders = async (req, res) => {
    try {
        const orders = await orderModel
            .find({ status: { $ne: 'completed' } })
            .sort({ createdAt: -1 })
            .populate('customerId', '-password');
        console.log(req.query)
        if (req.query.ajax === 'true') {
            return res.json(orders);
        }

        return res.render('AdminOrders');
    } catch (err) {
        console.error("Error fetching orders:", err);
        res.status(500).send("Server Error");
    }
};

const changeStatus=async(req,res)=>
{
    const {orderId,status}=req.body
   const order= await orderModel.findById(orderId)
   order.status=status
   const result=await order.save()
   return res.render('AdminOrders');
}

export{adminOrders,changeStatus}