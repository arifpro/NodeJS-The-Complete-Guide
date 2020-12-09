const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(1234);