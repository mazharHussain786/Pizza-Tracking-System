import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'



const UserSchema=new mongoose.Schema(
    {
        name:{type:String,required:true} ,
        email:{
            type:String,
            required:true,
            unique:true,
            validate:
            {
                validator:function(val)
                {
                    return validator.isEmail(val)
                },
                message:"Email is not valid "
            }

        } ,
        password:{type:String,required:true} ,
        role:
        {
            type:String,
            default:"User"
        }
    }
)


UserSchema.pre('save',async function()
{
   const salt= await bcrypt.genSalt(10)
   this.password=await bcrypt.hash(this.password,salt)
})

UserSchema.methods.comparePassword=async function(pasword)
{
    return  await bcrypt.compare(pasword,this.password)
}

const userModel=mongoose.model('User',UserSchema);




export{userModel}