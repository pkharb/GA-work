const
    express = require('express'),
    app = express(),
    path = require('path'),
    PORT = 3000;

// 
// configurations

//middleware
//console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public', 'views')));
app.use(express.static(path.join(__dirname, 'public')));

// routes
// app.get('/', (req, res) => {
//     res.json({success : true});
// }); 

app.get('/', (req, res) => {
    res.sendFile('index.html');
}); 



// listen to port
// app.listen(PORT, err => {
//     console.log(err || `listening to PORT ${PORT}`);
// });