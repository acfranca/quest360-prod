var app = require('./server/config/express');
var http = require('http');
var bcrypt = require('bcrypt-nodejs');


// http.createServer(app)
// .listen(8080, "192.168.0.104", function() {
// 	console.log('Servidor iniciado na porta 3000');
// });


http.createServer(app)
.listen(process.env.PORT || 3000, function() {
	console.log('Servidor iniciado na porta 3000');
});