var statusDAO = require('../DAO/statusDAO');
var error = require('../error/error');

var api = {};


api.SelectStatus = function (req, res) {

	var email = req.params["email"];
	var chave = req.params["chave"];

	statusDAO.SelectStatus(email, chave, function (err, rows) {
		error.responseReturnXHR(res, err, rows);
	});
};


module.exports = api;
