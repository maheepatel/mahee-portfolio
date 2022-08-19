const express = require('express');
const bodyParser = require("body-parser");
const request = require('request');


const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html")
res.sendFile(__dirname + "/css")
});
app.get("/newsletter",function(req,res){
    res.sendFile(__dirname + "index/html");

});

app.post("/newsletter",function(req,res){




})


app.listen(7000,function(){
    console.log("Server running at port 7000");
})