var sincronizarDAO = require('../DAO/sincronizarDAO');
var error = require('../error/error');
var md5 = require('md5');
 

var api = {};


api.SelectSincronizar = function (req, res) {

	var email = req.params["email"];
	var senha = req.params["senha"];


	sincronizarDAO.SelectSincronizar(email, md5(senha).toUpperCase(), function (err, rows) {
		error.responseReturnXHR(res, err, rows);
	});
};

api.SelectSincronizarPesquisa = function (req, res) {

	var pesquisa = req.params["codigo"];


	sincronizarDAO.SelectSincronizarPesquisa(pesquisa, function (err, rows) {
		error.responseReturnXHR(res, err, rows);
	});
};



module.exports = api;
