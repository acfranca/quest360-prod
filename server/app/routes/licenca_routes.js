var apiLicenca = require('../api/licencaAPI');

module.exports = function(app) {

    app.put('/quest/v1/licenca', apiLicenca.UpdateLicenca);
    
};