
import express from 'express'
import ejs from 'ejs'
import expressLayout from 'express-ejs-layouts'
import path from 'path'
import { fileURLToPath } from 'url'
import { route } from './routes/web.js'
import { myDb } from './app/models/dbConnect.js'
import session from 'express-session'
import flash from 'express-flash'
import dotenv from 'dotenv'
import MongoStore from 'connect-mongo'
import passport from 'passport'
import { passPortConfig } from './app/config/passport.js'


const app = express();
dotenv.config()
const Port = process.env.Port || 3000;

const mongoStore=MongoStore.create({
  mongoUrl:process.env.mongo_uri,
  collectionName:'sessions'
})

app.use(session({
  secret:process.env.secret,
  resave:false,
  saveUninitialized:true,
  cookie:{maxAge:1000*24*60*60},
  store:mongoStore
}))




passPortConfig(passport)
app.use(passport.initialize())
app.use(passport.session())








app.use(express.json())

app.use(express.urlencoded())



app.use((req,res,next)=>
{
  res.locals.session=req.session
  res.locals.user=req.user
  next()
})

app.use(flash())

app.use(express.static("public"));

app.use(expressLayout);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "/resources/views")); 

app.set("view engine", "ejs"); 

app.use('/',route)

const start=async()=>
{
   await myDb();
  
   app.listen(Port, () => {
    console.log(`http://localhost:${Port}`);
  });
}
try 
{
  start()
}
catch(error)
{
  console.log("Error encountered "+error)
}

