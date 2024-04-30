const express = require("express");
const app = express();

//middleware
app.use((res, req, next) => {
  next();
});

app.set("view engine", "ejs"); // configure of ejs
app.use(express.static("./public"));

app.get("/", function (req, res) {
  res.send("Hello Welcome");
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contack");
});
//routing
//  app.get('/profile',(req,res)=>{
//   res.send("hello welcome manoj for backend profile")
//  })

//  app.get('/profile/manoj',(req,res)=>{
//   res.send("hello from manoj");
//  })
//dynamic routing
app.get("/profile/:username", (req, res) => {
  res.send(`Hello This is ${req.params.username}`);
  // throw Error("something went wrong"); //this will go to errorhandler 
});

app.use(function(err,req,res,next){
  function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  }
})

app.listen(3000);
