var erroDAO = require('../DAO/erroDAO');
var error = require('../error/error');

var api = {};




api.InsertErroLista = function (req, res) {

	var body = req.body;

	erroDAO.InsertErroLista(body, function (err, rows) {
		error.responseReturnXHR(res, err, rows);

	//res.status(200).end(result);
	});
};



module.exports = api;
