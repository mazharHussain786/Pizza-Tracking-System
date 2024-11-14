import { orderModel } from "../../../models/orderSchema.js";
import moment from "moment";

const postOrder = async (req, res) => {
  const { phone, address } = req.body;
  if (!phone || !address) {
    req.flash("error", "All Fields are Mandatory");
    return res.redirect("/cart");
  }
  try {
    const order = await orderModel.create({
      address,
      phone,
      customerId: req.user._id,
      items: req.session.cart.items,
    });
    req.flash("success", "Order Placed Successfully");
    delete req.session.cart
    return res.redirect("customer/orders");
  } catch (err) {
    req.flash("error", "Something went wrong ");
    return res.redirect("/cart");
  }
};


const getOrders=async(req,res)=>
{   
      const orders = await orderModel.find({customerId:req.user._id},null,{sort:{'createdAt':-1}})
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
      res.render('customers/order',{orders,moment:moment})
}
export { postOrder,getOrders };
