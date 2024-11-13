import axios from "axios"
import Noty from "noty"
import { initAdmin } from "./admin.js"



initAdmin()
let btn_list=document.querySelectorAll(".add-to-cart")




const updateCart=async(pizza)=>
{
    try
    {
    const res=await axios.post('/updateCart',pizza)
    const total_Quantity=res.data.total_Quantity
    document.querySelector("#total_Quantity").innerText=total_Quantity
    new Noty({
        type:"success",
        text:"Item is Added to Cart",
        timeout:2000
    }).show()
    }
    catch(error)
    {
        new Noty({
            type:"error",
            text:"Something went wrong",
            timeout:2000
        }).show()
    }
  
}
btn_list.forEach((btn)=>
{
    btn.addEventListener('click',(e)=>
    {
        let pizza=JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
        console.log(pizza)
    })
})


