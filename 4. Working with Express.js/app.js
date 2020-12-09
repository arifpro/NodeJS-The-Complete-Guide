// default
const http = require('http');

// 3rd party
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next();  // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello! from express!</h1>');
});

const server = http.createServer(app);

server.listen(1234);