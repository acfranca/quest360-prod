var canalDAO = require('../DAO/canalDAO');
var error = require('../error/error');

var api = {};


api.SelectCanal = function (req, res) {

	var email = req.params["email"];
	var senha = req.params["senha"];
	var id = req.params["id"];


	canalDAO.SelectCanal(email, senha, id, function (err, rows) {
		error.responseReturnXHR(res, err, rows);
	});
};


module.exports = api;
