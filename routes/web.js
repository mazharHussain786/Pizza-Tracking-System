import express, { Router } from 'express'
import { login,postRegister,register,postLogin ,logout} from "../app/http/controllers/authController.js";
import { home } from '../app/http/controllers/HomeController.js';
import { cart ,updateCart} from '../app/http/controllers/customers/CartController.js';
import { guest } from '../app/http/middlewares/guest.js';
import { postOrder,getOrders } from '../app/http/controllers/customers/OrderController.js';
import { auth } from '../app/http/middlewares/auth.js';
import { adminOrders } from '../app/http/controllers/admin/orderController.js';



const route=express.Router()

route.get('/',home)
route.get('/login',guest,login)
route.post('/login',postLogin)
route.get('/register',guest,register)
route.post('/register',postRegister)
route.post('/logout',logout)

route.get('/cart',cart)
route.post('/updateCart',updateCart)



route.post("/order",auth,postOrder)
route.get("/customer/orders",auth,getOrders)


// admin routes

route.get("/admin/orders",auth,adminOrders)


export {route};