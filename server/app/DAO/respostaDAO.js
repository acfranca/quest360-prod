
 var api = {}

api.InsertResposta = function (body, callback) {
    console.log(body[i].dataParticipacao);
        global.conn.request()
        .input('pPESQUISA', body.idPesquisa)
        .input('pPERGUNTA',  body.idPergunta)
        .input('pRESPOSTA',  body.idResposta)
        .input('pRESPOSTA_DISSERTATIVA',  body.respostaDissertativa)
        .input('pRESPOSTA_NULA',  body.respostaNula)
        .input('pTOKEN',  body.token)
        .input('pCOLETADO_EM', body.dataParticipacao)
        .input('pCOLETADO_POR',  body.email)
        .input('pTEMPO_RESPOSTA',  body.tempo)
        .execute('WS_PARTICIPACAO_INSERT').then(result => {

            callback();

        }).catch(err => {

            callback(err);

        })


};

api.InsertRespostaLista = function (body, callback) {

    for(var i = 0; i < body.length; i++){

        console.log(body[i].dataParticipacao)
             global.conn.request()
            .input('pPESQUISA', body[i].idPesquisa)
            .input('pPERGUNTA',  body[i].idPergunta)
            .input('pRESPOSTA',  body[i].idResposta)
            .input('pRESPOSTA_DISSERTATIVA',  body[i].respostaDissertativa)
            .input('pRESPOSTA_NULA',  body[i].respostaNula)
            .input('pTOKEN',  body[i].token)
            .input('pCOLETADO_EM', body[i].dataParticipacao)
            .input('pCOLETADO_POR',  body[i].email)
            .input('pTEMPO_RESPOSTA',  body[i].tempo)
            .execute('WS_PARTICIPACAO_INSERT').then(result => {
    
                callback();
    
            }).catch(err => {
    
                callback(err);
    
            })
        }
}

api.InsertRespostaListaSQLite = function (body, callback) {

    for(var i = 0; i < body.length; i++){
            // r
            global.conn.request()
            .input('pPESQUISA', body[i].idPesquisa)
            .input('pPERGUNTA',  body[i].idPergunta)
            .input('pRESPOSTA',  body[i].idResposta)
            .input('pRESPOSTA_DISSERTATIVA',  body[i].respostaDissertativa)
            .input('pRESPOSTA_NULA',  body[i].respostaNula)
            .input('pTOKEN',  body[i].token)
            .input('pCOLETADO_EM', body.dataParticipacao)
            .input('pCOLETADO_POR',  body[i].email)
            .input('pTEMPO_RESPOSTA',  body[i].tempo)
            .execute('WS_PARTICIPACAO_INSERT').then(result => {
    
                callback();
    
            }).catch(err => {
    
                callback(err);
    
            })
        } 
      
}


module.exports = api;