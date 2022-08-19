const express = require('express');
const bodyParser = require("body-parser");
const request = require('request');


const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.send(setTheme(mode));

});
app.get("/newsletter",function(req,res){
    res.sendFile(__dirname + "index/html");

});

app.post("/newsletter",function(req,res){




})


app.listen(7000,function(){
    console.log("Server running at port 7000");
})




let theme = localStorage.getItem('theme');
if(theme == null){
    setTheme('light');
}
else{
    setTheme(theme);
}

let themeDot = document.getElementsByClassName('theme-dot');
for (var i = 0; i < themeDot.length; i++) {
    themeDot[i].addEventListener('click', function() {
           let mode = this.dataset.mode;
            console.log('Option clicked:', mode);
            setTheme(mode);
        });
}

function setTheme(mode) {
    if (mode === 'light'){
        document.getElementById('theme-style').href = 'css/default.css';
    }
    if (mode === 'blue'){
        document.getElementById('theme-style').href = 'css/blue.css';
    }
    if (mode === 'green')
        document.getElementById('theme-style').href = 'css/green.css';
    if (mode === 'purple')
        document.getElementById('theme-style').href = 'css/purple.css';
    localStorage.setItem('theme',mode);
}











//New Mailchimp API key:121c5f00c6cb0944d3715922a1be0069-us10
// list id--21f7d09d15
