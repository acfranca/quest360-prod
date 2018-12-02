var apiErro = require('../api/erroAPI');

module.exports = function(app) {

    app.post('/quest/v1/erro/lista', apiErro.InsertErroLista);
    
};