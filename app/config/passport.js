
import Strategy from 'passport-local'
import { userModel } from "../models/UserSchema.js";

const passPortConfig=(passport)=>
{
    
const LocalStrategy=Strategy.Strategy;



passport.use(new LocalStrategy({usernameField:'email'},async(email,password,done)=>
{
    try
    {
        const user=await userModel.findOne({email})
        if(!user)
        {
          return done(null,false,{message:"No User with this email !!"})
        }
       if( ! await(user.comparePassword(password)))
       {
        return done(null,false,{message:"Wrong Username or Password !!"})
       }
       return done(null,user,{message:'Logged-In Successfully  '})
    }
    catch(error)
    {
        return done(null,false,{message:"Something went wrong !!"})
    }
   

}
))
passport.serializeUser((user,done)=> 
{
    done(null,user._id)
})

passport.deserializeUser(async(id,done)=>
{
    try{
        const user=await userModel.findById(id)
        done(null,user)   //req.user
    }
    catch(err)
    {
        console.log(err)
        done(err,null)
    }
   
})

}
export {passPortConfig}