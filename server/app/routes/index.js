module.exports = function(app) {
    
    //Q-COLLECT 
     require('./licenca_routes')(app);
     require('./pesquisa_routes')(app);
     require('./resposta_routes')(app);
     require('./status_routes')(app);
     require('./erro_routes')(app);

     //Q-ANALYTIC
     require('./canal_routes')(app);
     require('./collect_routes')(app);
     require('./pesquisa_analytics_routes')(app);
     require('./sincronizar_analytics_routes')(app);

     //facebook Orion
     
     //require('./webhook_routes')(app);

};

