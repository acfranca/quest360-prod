var apiWebhook = require('../api/webhookAPI');

module.exports = function(app) {

    app.post('/orion/v1/webhook', apiWebhook.PostFaceWebhook);
    app.get('/orion/v1/webhook', apiWebhook.SelectFaceWebhook);
    
};