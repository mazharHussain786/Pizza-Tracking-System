const express = require("express");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");

const app = express();

const Port = process.env.Port || 3000;

app.use(express.static("public")) 

app.get("/", (req, res) => {
  res.render("home"); // we have already tell the path in below
});


app.use(expressLayout);

app.set("views", path.join(__dirname, "/resources/views")); //isne view ka adress btaya

app.set("view engine", 'ejs'); // isne btaya k view_engine ejs ko use kry gaa

app.listen(Port, () => {
  console.log(`http://localhost:${Port}`);
});
