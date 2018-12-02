var apiResposta = require('../api/respostaAPI');

module.exports = function(app) {

    app.post('/quest/v1/resposta', apiResposta.InsertResposta);
    app.post('/quest/v1/resposta/lista', apiResposta.InsertRespostaLista);
    app.post('/quest/v1/resposta/lista/sqlite', apiResposta.InsertRespostaListaSQLite);
    
};