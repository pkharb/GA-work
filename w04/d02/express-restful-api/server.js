const
 express = require('express'),
 app = express(),
 PORT = 3001;

 // database connection
//  const quotes = require('./db');
var id = 1;
//  // express middleware
//  app.use(express.json());

 // express routes
//  app.get('/', (req, res) => {
//      res.json({success: true});
//  });

 // finding an object by name
//  app.get('/quotes', (req, res) => {
//      res.json({success: true, quotes});
//  });

 // finding an object by id
//  app.get('/quotes/:id', (req, res) => {
//      let quote = quotes.find(x => x.id == req.params.id)
//     res.json({success: true, quote});
// });

// add a quote to quotes
// app.post('/quotes', (req, res) => {
//     quotes.push({...req.body, id});
//     id++;
//     res.json({success : true, quotes})
// });

// delete a quote from quotes
app.delete('/quotes/:id', (req, res) => {
    quotes.pop({id});
    res.json({success : true, quotes})
});






 

// app.get('/', (req, res) => {
//     res.send({success:true, })

// });

app.listen(PORT, err => {
    console.log(err || `running port ${PORT}`)
});