const cart = (req, res) => {
    res.render("customers/cart");
};

//  make cart object

//  cart object has item object , total quantity , total price 
//  req.session.cart 
//  req.session.cart ={ items:{},total_quanity:0,total_price:0 }
//  if(cart.items[req.body._id]=>  cart.items[req.body._id].qty=1,  )
//  if(!cart.items[req.body_.id]=> req.body.items[req.body_item]={item:req.body,qty:1})

const updateCart=(req,res)=>
{
    if(!req.session.cart)
    {
        req.session.cart={
            items:{},
            total_Quantity:0,
            total_Price:0
        }
    }
    let cart=req.session.cart;
    if(!cart.items[req.body._id])
    {
       cart.items[req.body._id]={
        item:req.body,
        qty:1,       
       }
       cart.total_Quantity+=1
       cart.total_Price+=req.body.price
    }
    else
    {
        cart.items[req.body._id].qty+=1 // individual quanatity
        cart.total_Quantity+=1    // total Quantity
        cart.total_Price+=req.body.price  //total price 
    }
    
    res.send({total_Quantity:req.session.cart.total_Quantity})
}

export {cart,updateCart}