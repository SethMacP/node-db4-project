const express = require('express');
const resourceRouter = require('./Resources/ResourcesRouter')
//Port starts with environmental variable and defaults to 8000 if false.


const server = express();



server.use(express.json())
server.use(resourceRouter);

server.use((err, req, res, next)=>{
    console.log('Time: ', Date.now())
    console.log(err)
    next();
})
server.get('/', (req,res)=>{
    res.send("Welcome!")
})


module.exports = server;