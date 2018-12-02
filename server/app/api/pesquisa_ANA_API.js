var pesquisa_ANA_DAO = require('../DAO/pesquisa_ANA_DAO');
var error = require('../error/error');

var api = {};


api.SelectPesquisaANA = function (req, res) {

	var id = req.params["id"];

	pesquisa_ANA_DAO.SelectPesquisaANA(id, function (err, rows) {
		error.responseReturnXHR(res, err, rows);
	});
};

api.SelectPerguntaANA = function (req, res) {

	var email = req.params["email"];
	var senha = req.params["senha"];
	var idpesquisa = req.params["idpesquisa"];

	pesquisa_ANA_DAO.SelectPerguntaANA(email, senha, idpesquisa, function (err, rows) {
		error.responseReturnXHR(res, err, rows);
	});
};


module.exports = api;
