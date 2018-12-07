require('dotenv').config();

const
    express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000;
    

// database connection
require('./db');

// app configurations

// app middleware
app.use(express.json())

// routes
const userRouter = require('./router/userRouter');
app.use('/api/users', userRouter)
// index


// listen on port
app.listen(PORT, err => {
    console.log(err || `server listening to : ${PORT}`)
})
