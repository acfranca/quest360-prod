
var api = {}



api.SelectCollect = function (email, senha, id, callback) {

    global.conn.request()
        .input('pEMAIL_ACESSO', email)
        .input('pSENHA_ACESSO', senha)
        .input('pID_CADASTRO', id)
        .execute('WS_ANALYTICS_LIST_POR_QCOLLECT').then(result => {

            callback(null, result.recordsets[0]); 
            
        }).catch(err => {

            callback(err);
        
        })

};









module.exports = api;