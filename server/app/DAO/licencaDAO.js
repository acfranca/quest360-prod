var api = {}


api.update = function (email, senha, callback) {

    global.conn.request()
        .input('pEMAIL_ACESSO', email)
        .input('pSENHA_ACESSO', senha)
        .execute('WS_LICENCA_SINCRONIZAR').then(result => {

            callback(null, result.recordsets[0]);

        

        }).catch(err => {

            callback(err);

        })

};









module.exports = api;