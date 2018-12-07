//load express
var express = require('express');

// create our express app
var app = express();

app.get('/goodbye', function(req, res){
    res.json({msg : 'Goodbye World'});

});

app.listen(3000, function(){
    console.log('listening to port 3000')
});

// app.get('/', handleRoot);
// app.get('/goodbye', handleRoot1);

// app.get('/test', function(req, res){
//     var msg = req.query.msg ? req.query.msg : '!';
//     res.send("Hello Express " + msg);
// });

// function handleRoot(request, response){
//     response.send('<h1>Hello Express<h1>');
// }

// function handleRoot1(req, res){
//     res.send('<h1>Goodbye World');
// }



// app.get('/', function(req, res){
//     res.send('<h1>Hello Express<h1>');
// });

