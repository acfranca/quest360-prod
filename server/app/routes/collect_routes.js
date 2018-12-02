var apiCollect = require('../api/collectAPI');

module.exports = function(app) {

    app.get('/quest/v1/collect/:email/:senha/:id', apiCollect.SelectCollect);
    
};