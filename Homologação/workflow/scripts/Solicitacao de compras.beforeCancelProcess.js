function beforeCancelProcess(colleagueId,processId){
	if(hAPI.getCardValue("ppf1")!=""){
		try{
			var clientService = fluigAPI.getAuthorizeClientService();
			var data = {
				companyId : '01',
				serviceCode : 'Protheus',
				endpoint : '/rest/FLGCOM00/PedidodeCompras/'+hAPI.getCardValue("ppf1"),
				method : 'delete',
				timeoutService: '100',
				headers: {
					"tenantid" : String(hAPI.getCardValue('empresa_cod2') + ',' + hAPI.getCardValue('filial_cod2') ) 
				}
			}
			
			log.info("Json de cancelamento " + JSON.stringify(data)+" - "+getValue("WKNumProces"));
			var retornoApi = clientService.invoke(JSON.stringify(data));
		    var retornoApi2 = JSON.parse(retornoApi.getResult());
		    var statusHttp = retornoApi.getHttpStatusResult();
		    if(retornoApi.getResult() == null || retornoApi.getResult().isEmpty())
		        throw java.lang.Exception("Ocorreu uma falha no retorno da API!");
		    var c1= DatasetFactory.createConstraint('HTTPSTATUS', statusHttp, statusHttp, ConstraintType.MUST);
		    var c2= DatasetFactory.createConstraint('RESULTADO', retornoApi.getResult(), retornoApi.getResult(), ConstraintType.MUST);
			var c3= DatasetFactory.createConstraint('PROCESSO', "compras", "compras", ConstraintType.MUST);
		    var c4= DatasetFactory.createConstraint('DATA', data, data, ConstraintType.MUST);
		    var dataset = DatasetFactory.getDataset('dts_httpStatus', null, [c1,c2,c3,c4], null);
			log.info("==> ");
			log.dir(dataset);
			if(dataset.getValue(0,"code")=="400"){
				log.info("Deu erro aqui"+dataset.getValue(0,"message"));
				throw java.lang.Exception(""+retornoApi2.errorMessage);
		    }
			hAPI.setCardValue("ppf1","");
		} catch(err) {
			if(err.search("Pesquisa nao encontrada com dados acima")){
				
			}else{
				throw (err);
			}
		}
	}
	
	if(hAPI.getCardValue("ppf2")!=""){
		try{
			var clientService = fluigAPI.getAuthorizeClientService();
			var data = {
				companyId : '01',
				serviceCode : 'Protheus',
				endpoint : '/rest/FLGCOM00/PedidodeCompras/'+hAPI.getCardValue("ppf2"),
				method : 'delete',
				timeoutService: '100',
				headers: {
					"tenantid" : String(hAPI.getCardValue('empresa_cod2') + ',' + hAPI.getCardValue('filial_cod2') ) 
				}
			}
			log.info("Json de cancelamento " + JSON.stringify(data)+" - "+getValue("WKNumProces"));
			var retornoApi = clientService.invoke(JSON.stringify(data));
		    var retornoApi2 = JSON.parse(retornoApi.getResult());
		    var statusHttp = retornoApi.getHttpStatusResult();
		    if(retornoApi.getResult() == null || retornoApi.getResult().isEmpty())
		        throw java.lang.Exception("Ocorreu uma falha no retorno da API!");
		    var c1= DatasetFactory.createConstraint('HTTPSTATUS', statusHttp, statusHttp, ConstraintType.MUST);
		    var c2= DatasetFactory.createConstraint('RESULTADO', retornoApi.getResult(), retornoApi.getResult(), ConstraintType.MUST);
			var c3= DatasetFactory.createConstraint('PROCESSO', "compras", "compras", ConstraintType.MUST);
		    var c4= DatasetFactory.createConstraint('DATA', data, data, ConstraintType.MUST);
		    var dataset = DatasetFactory.getDataset('dts_httpStatus', null, [c1,c2,c3,c4], null);
			if(dataset.getValue(0,"code")=="400"){
				log.info("Deu erro aqui"+dataset.getValue(0,"message"));
				throw java.lang.Exception(""+retornoApi2.errorMessage);
		    }
			hAPI.setCardValue("ppf2","");

		} catch(err) {
			if(err.search("Pesquisa nao encontrada com dados acima")){
				
			}else{
				throw (err);
			}
		}
	}
	
	if(hAPI.getCardValue("ppf3")!=""){
		try{
			var clientService = fluigAPI.getAuthorizeClientService();
			var data = {
				companyId : '01',
				serviceCode : 'Protheus',
				endpoint : '/rest/FLGCOM00/PedidodeCompras/'+hAPI.getCardValue("ppf3"),
				method : 'delete',
				timeoutService: '100',
				headers: {
					"tenantid" : String(hAPI.getCardValue('empresa_cod2') + ',' + hAPI.getCardValue('filial_cod2') ) 
				}
			}
			log.info("Json de cancelamento " + JSON.stringify(data)+" - "+getValue("WKNumProces"));
			var retornoApi = clientService.invoke(JSON.stringify(data));
		    var retornoApi2 = JSON.parse(retornoApi.getResult());
		    var statusHttp = retornoApi.getHttpStatusResult();
		    if(retornoApi.getResult() == null || retornoApi.getResult().isEmpty())
		        throw java.lang.Exception("Ocorreu uma falha no retorno da API!");
		    var c1= DatasetFactory.createConstraint('HTTPSTATUS', statusHttp, statusHttp, ConstraintType.MUST);
		    var c2= DatasetFactory.createConstraint('RESULTADO', retornoApi.getResult(), retornoApi.getResult(), ConstraintType.MUST);
			var c3= DatasetFactory.createConstraint('PROCESSO', "compras", "compras", ConstraintType.MUST);
		    var c4= DatasetFactory.createConstraint('DATA', data, data, ConstraintType.MUST);
		    var dataset = DatasetFactory.getDataset('dts_httpStatus', null, [c1,c2,c3,c4], null);
			if(dataset.getValue(0,"code")=="400"){
				log.info("Deu erro aqui"+dataset.getValue(0,"message"));
				throw java.lang.Exception(""+retornoApi2.errorMessage);
		    }
			hAPI.setCardValue("ppf3","");

		} catch(err) {
			if(err.search("Pesquisa nao encontrada com dados acima")){
				
			}else{
				throw (err);
			}
		}
	}
	if(parseInt(getValue("WKNumState"))!=0 && parseInt(getValue("WKNumState"))!=4 && parseInt(getValue("WKNumState"))!=5&& parseInt(getValue("WKNumState"))!=106){
		if(hAPI.getCardValue("solicitacao_protheus")!=""){
			//Chama o cancelamento da sc
			servicetask187();
		}
	}

}