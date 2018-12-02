var pesquisaDAO = require('../DAO/pesquisaDAO');
var error = require('../error/error');

var api = {};


api.SelectPesquisa = function (req, res) {

	var email = req.params["email"];
	var chave = req.params["chave"];

	pesquisaDAO.SelectPesquisa(chave, email, function (err, rows) {
		error.responseReturnXHR(res, err, rows);
	});
};


module.exports = api;
