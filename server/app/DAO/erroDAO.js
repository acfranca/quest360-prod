
 var api = {}

api.InsertErroLista = function (body, callback) {

    for(var i = 0; i < body.length; i++){
             global.conn.request()
            .input('pEMAIL_ACESSO', body[i].email)
            .input('pCHAVE_LICENCA',  body[i].chave)
            .input('pPAGINA',  body[i].pagina)
            .input('pDESCRICAO',  body[i].descricao)
            .input('pEXCEPTION',  body[i].exception)
            .execute('WS_LOG_ERRO_INSERT').then(result => {

                console.log(result)

                callback(null, result.recordset[0]);
            
            }).catch(err => {
    
                callback(err);
    
            })
        }
}


module.exports = api;