var apiSincronizar = require('../api/sincronizarAPI');

module.exports = function(app) {

    app.get('/quest/v1/sincronizar/:email/:senha', apiSincronizar.SelectSincronizar);
    app.put('/quest/v1/sincronizar/:codigo', apiSincronizar.SelectSincronizarPesquisa);
    
};