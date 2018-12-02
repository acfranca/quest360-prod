var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('../app/routes'),
    error = require('../app/error/error');

    const sql = require('mssql');

// var config = {
//     user: 'AdminMGourmet',
//     password: 'Wpd3x38$',
//     server: '158.69.55.11', 
//     database: 'QuestMGourmet'   
// }

var config = {
    user: 'ftcon',
    password: 'xFe7h20r',
    server: 'dbsq0007.whservidor.com', 
    database: 'ftcon'   
}

sql.connect(config)
   .then(conn => global.conn = conn)
   .catch(err => console.log(err));


app.use(bodyParser.urlencoded({limit: "50mb", extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(express.static('./client'));

routes(app);
module.exports = app;