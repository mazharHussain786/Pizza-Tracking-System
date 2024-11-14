import { userModel } from "../../models/UserSchema.js";
import passport from 'passport'
const login = (req, res) => {
  res.render("auth/login");
};

const register = (req, res) => {
  res.render("auth/register");
};

const postRegister = async (req, res) => {
 
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    req.flash("error", "All fields are required");
    req.flash("name", name);
    req.flash("email", email);
    return res.redirect("/register");
  }
  try {
    if (await userModel.exists({ email: email }))
    {
      req.flash("error", "Email is Already Taken");
      req.flash("name", name);
      req.flash("email", email);
     return res.redirect("/register");
    }
      const user = await userModel.create({ name, email, password });
      return res.redirect("/");
    } 
    catch (error) {
    req.flash("error", "Something went wrong");
    res.redirect("/register");
  }
};

const _getredirectUrl=(req)=>
{
  if(req.user.role==="admin")
  {
    return "/admin/orders"
  }
  return "/customer/orders"
  

}

const postLogin=async(req,res,next)=>
{
  const cart=req.session?.cart;
 passport.authenticate('local',(err,user,info)=>
 {
  if(err)
  {
    req.flash("error",info.message)
    return next(err)
  }
  if(!user)
  {
    req.flash("error",info.message)
    return res.redirect("/login")
  }


  req.logIn(user,(err)=>
  {
     if(err)
     {
      req.flash("error",info.message)
      return next(err)
     }
     req.session.cart=cart
   return res.redirect(_getredirectUrl(req))
  })

 })(req,res,next)
}

const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Passes the error to the error-handling middleware
    }
    res.redirect('/login'); // Redirects to the login page on successful logout
  });
};


export { login, register, postRegister,postLogin,logout };
