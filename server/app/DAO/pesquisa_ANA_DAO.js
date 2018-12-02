
var api = {}



api.SelectPesquisaANA = function (id, callback) {

    global.conn.request()
        .input('pCLIENTE', id)
        .execute('WS_ANALYTICS_LIST_PESQUISA').then(result => {

            callback(null, result.recordsets[0]); 
            
        }).catch(err => {

            callback(err);
        
        })

};

api.SelectPerguntaANA = function (email, senha, idpesquisa, callback) {

    global.conn.request()
        .input('pEMAIL_ACESSO', email)
        .input('pSENHA_ACESSO', senha)
        .input('pPESQUISA', idpesquisa)
        .execute('WS_ANALYTICS_LIST_PERGUNTA').then(result => {

           
            var index = result.recordset[0].PERGUNTA;
            var retorno = []
            var data = result.recordset;

            retorno.push({ pergunta: data[0].PERGUNTA })

            for (var i = 0; i < data.length; i++) {


                if (data[i].PERGUNTA != index) {
                    retorno.push({ pergunta: data[i].PERGUNTA })

                    if ((i + 1) <= data.length) {
                        console.log(data.length);
                        index = data[i].PERGUNTA;

                    }
                }
            }

            for (var i = 0; i < retorno.length; i++) {
                retorno[i].resposta = []
                for (var j = 0; j < data.length; j++) {

                    if (retorno[i].pergunta == data[j].PERGUNTA) {
                        retorno[i].resposta.push(data[j]);


                    }
                }
            }
            callback(null, retorno); 
        }).catch(err => {

            callback(err);
        
        })

};










module.exports = api;