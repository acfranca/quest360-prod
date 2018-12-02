var apiCanal = require('../api/canalAPI');

module.exports = function(app) {

    app.get('/quest/v1/canal/:email/:senha/:id', apiCanal.SelectCanal);
    
};