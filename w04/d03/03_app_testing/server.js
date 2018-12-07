const
    express = require('express'),
    app = express(),
    path = require('path'),
    PORT = 3000;

// configurations

// middleware
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', function(req, res){
    res.sendFile('index.html');
});

// listen to PORT
app.listen(PORT, function(err){
    console.log(err ||  'listening to PORT : ${PORT}');
});