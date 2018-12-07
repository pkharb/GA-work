var express = require('express');
var app = express();


app.get('/', function(req, res){
    //console.log(path);
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/about', function(req, res){
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/contact', function(req, res){
res.sendFile(__dirname + '/views/contact.html');
});

app.listen(3000, function(){
    console.log("you are connected to port 3000");
});