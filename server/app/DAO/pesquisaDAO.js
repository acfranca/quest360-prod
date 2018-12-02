var api = {}



api.SelectPesquisa = function (chave, email, callback) {


    global.conn.request()
        .input('pCHAVE_LICENCA', chave)
        .input('pEMAIL_ACESSO', email)
        .execute('WS_PESQUISA_SELECT').then(result => {
            console.log(result);
            var index = result.recordset[0].CODIGO_PERGUNTA;
            var retorno = []
            var data = result.recordset;

            retorno.push({ pergunta: data[0].CODIGO_PERGUNTA })

            for (var i = 0; i < data.length; i++) {


                if (data[i].CODIGO_PERGUNTA != index) {
                    retorno.push({ pergunta: data[i].CODIGO_PERGUNTA })

                    if ((i + 1) <= data.length) {
                        console.log(data.length);
                        index = data[i].CODIGO_PERGUNTA;

                    }
                }
            }
            for (var i = 0; i < retorno.length; i++) {
                retorno[i].resposta = []
                for (var j = 0; j < data.length; j++) {

                    if (retorno[i].pergunta == data[j].CODIGO_PERGUNTA) {
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