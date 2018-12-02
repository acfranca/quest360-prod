
var api = {}



api.SelectStatus = function (email, chave, callback) {

    global.conn.request()
        .input('pEMAIL_ACESSO', email)
        .input('pCHAVE_LICENCA', chave)
        .execute('WS_LICENCA_STATUS').then(result => {

            callback(null, result.recordsets[0]); 
            
        }).catch(err => {

            callback(err);
        
        })

};









module.exports = api;