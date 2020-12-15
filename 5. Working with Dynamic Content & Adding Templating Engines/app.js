const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

// routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes);
app.use('/', shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404')
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(1234);