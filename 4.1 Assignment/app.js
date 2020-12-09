const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('Middleware 1');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Middleware 2');
//     res.send('<h2>Response from middleware 2</h2>');
// });

app.use('/users', (req, res, next) => {
    console.log('From route /users');
    res.send('<h2>From route /users</h2>');
});
app.use('/', (req, res, next) => {
    console.log('From route /');
    res.send('<h2>From route </h2>');
});

app.listen(1234);