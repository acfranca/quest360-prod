var apiPesquisaANA = require('../api/pesquisa_ANA_API');

module.exports = function(app) {

    app.get('/quest/v1/pesquisa/:id', apiPesquisaANA.SelectPesquisaANA);
    app.get('/quest/v1/pesquisa/pergunta/:email/:senha/:idpesquisa', apiPesquisaANA.SelectPerguntaANA);
    
};