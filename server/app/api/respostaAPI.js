var respostaDAO = require('../DAO/respostaDAO');
var error = require('../error/error');

var api = {};


api.InsertResposta = function (req, res) {

	var body = req.body;
	console.log(body)

	respostaDAO.InsertResposta(body, function (err) {
		error.responseReturnXHR(res, err);
	});
};

api.InsertRespostaLista = function (req, res) {

	var body = req.body;

	respostaDAO.InsertRespostaLista(body, function (err) {
		error.responseReturnXHR(res, err);
	});
};

api.InsertRespostaListaSQLite = function (req, res) {

	var body = req.body;

	respostaDAO.InsertRespostaListaSQLite(body, function (err) {
		error.responseReturnXHR(res, err);
	});
};


module.exports = api;
