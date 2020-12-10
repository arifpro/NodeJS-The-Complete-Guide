const path = require('path');

const express = require('express');

const route = require('./routes/route');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(route);

app.listen(3005);
