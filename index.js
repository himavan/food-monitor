const mongoose = require('mongoose');
const express = require('express');
const app = express();

const monitor = require('./routes/monitor');

mongoose.connect('mongodb://appaccess:app123@ds353748.mlab.com:53748/foodmonitor', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.error('Could not connect to MongoDb...' + err));

    app.use(function (req, res, next) {
        // console.log(req.method, req.url,req.body);
        next();
    });

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, x-auth-token, Content-Type, Accept, Authorization");
    next();
}

app.use(express.json()) 
app.use(allowCrossDomain);
app.use('/',express.static('public'));
app.use('/api/monitor/', monitor);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));