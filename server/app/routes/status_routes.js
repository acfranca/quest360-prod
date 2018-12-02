var apiStatus = require('../api/statusAPI');

module.exports = function(app) {

    app.get('/quest/v1/status/:email/:chave', apiStatus.SelectStatus);
    
};