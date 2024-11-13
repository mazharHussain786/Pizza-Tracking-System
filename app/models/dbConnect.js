import mongoose from "mongoose";

const myDb=async ()=>
{
    try{
        await mongoose.connect(process.env.mongo_uri)
        console.log("DataBase is Connected")
    }
    catch(error)
    {
        console.log("MongoDb connection error "+error);
    }
   
}


export { myDb };

