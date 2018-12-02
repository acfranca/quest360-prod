var apiPesquisa = require('../api/pesquisaAPI');

module.exports = function(app) {

    app.get('/quest/v1/pesquisa/:email/:chave', apiPesquisa.SelectPesquisa);
    
};