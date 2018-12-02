var collectDAO = require('../DAO/collectDAO');
var error = require('../error/error');

var api = {};


api.SelectCollect = function (req, res) {

	var email = req.params["email"];
	var senha = req.params["senha"];
	var id = req.params["id"];


	collectDAO.SelectCollect(email, senha, id, function (err, rows) {
		error.responseReturnXHR(res, err, rows);
	});
};


module.exports = api;
