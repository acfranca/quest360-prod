
var api = {}



api.SelectSincronizar = function (email, senha, callback) {

    global.conn.request()
        .input('pEMAIL_ACESSO', email)
        .input('pSENHA_ACESSO', senha)
        .execute('WS_ANALYTICS_SINCRONIZAR').then(result => {

            callback(null, result.recordsets[0]);

        }).catch(err => {

            callback(err);

        })

};

api.SelectSincronizarPesquisa = function (pesquisa, callback) {

    global.conn.request()
        .input('pCODIGO_LIC_PESQ', pesquisa)
        .execute('WS_PESQUISA_SINCRONIZAR').then(result => {

            callback(null, result.recordsets[0]);

        }).catch(err => {

            callback(err);

        })

};

// "ID_CLIENTE": "13",
//     "EMAIL": "tollerfernanda@gmail.com",
//         "ACESSO": "202CB962AC59075B964B07152D234B70"

// GRAVAR NO SQLITE









module.exports = api;