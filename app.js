const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public")); //For accessing the styles.css

app.get("/", function(req,res){

  var today = new Date();
  //  var currentDay = today.getDay();
  //  var dayList=["Sunday","Monday","Tuesday","Wednesdsy","Thursday","Friday","Saturday"];
  //
  // var day=dayList[currentDay];
var options = { weekday: "long", day: 'numeric', month: 'long', year: 'numeric' };
// var day=today.toLocaleDateString("en-US");
var day=today.toLocaleDateString("en-US", options);

  res.render("list",{kindOfDay:day, newListItem:items})

   // if(currentDay==6 || currentDay==0)
   // {
   //   day="weekend";
   //   }else
   //   {
   //   day="weekday";
   //   }
   //  res.render("list",{kindOfDay:day});
});

app.post("/", function(req,res){
  var item = req.body.newItem;
  items.push(item);

  res.redirect("/");
})








app.listen(3000, function(req,res){
  console.log("Server is running at port 3000");
})
