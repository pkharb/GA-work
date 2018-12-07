const 
express = require('express'),
app = express(),
PORT = 3000;

// database connection
const fruits = require('./db');

// express configurations

// express middleware
app.use(express.json());

var id = 2;
// express routes
app.get('/', (req, res) => {
    res.json({ success : true});
});

// index all fruits
app.get('/fruits', (req, res) => {
    res.json({success: true, fruits});
})

// index fruit with id
app.get('/fruits/:id', (req, res) => {
    let fruit = fruits.find(f => f.id == req.params.id);
    res.json({success: true, fruit});
});

// add new fruit
app.post('/fruits', (req, res) => {
    fruits.push({...req.body, id});
    id++;
    res.json({success: true, fruits})
});


// listen on PORT

app.listen(PORT, err => {
    console.log(err || `App listening to port ${PORT}`);
});