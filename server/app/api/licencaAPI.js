var licencaDAO = require('../DAO/licencaDAO');
var error = require('../error/error');
var md5 = require('md5');

var api = {};


api.UpdateLicenca = function (req, res) {

	var licenca = req.body;
	console.log(licenca.email)

	licencaDAO.update(licenca.email, md5(licenca.senha).toUpperCase(), function (err, rows) {
		error.responseReturnXHR(res, err, rows);
	});
};


module.exports = api;
