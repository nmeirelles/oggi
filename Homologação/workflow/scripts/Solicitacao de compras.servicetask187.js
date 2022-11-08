function servicetask187() {
	try{
		var clientService = fluigAPI.getAuthorizeClientService();
		var data = {
			companyId : String('0'+getValue("WKCompany")),
			serviceCode : 'Protheus',
			endpoint : '/rest/SOLCOMPRASINC/ExclusaoSol',
			method : 'post',
			timeoutService: '100', 
			params : {
				"NUMSOL" : String( hAPI.getCardValue('solicitacao_protheus') )
			},
			headers: {
				'tenantid': String(hAPI.getCardValue('empresa_cod2') + ',' + hAPI.getCardValue('filial_cod2')) 
			}
		}
		log.info("Json de cancelamento da sc"+JSON.stringify(data));
		var retornoApi = clientService.invoke( String( JSON.stringify(data) ) );
		log.info("Teste");
	    var retornoApi2 = JSON.parse(retornoApi.getResult());
		var statusHttp = retornoApi.getHttpStatusResult();
		log.info(retornoApi.getResult());
		// VERIFICA SE O RETORNO ESTA VAZIO
	    if(retornoApi.getResult() == null || retornoApi.getResult().isEmpty())
	        throw java.lang.Exception("Ocorreu uma falha no retorno da API!");
		log.info(retornoApi.getResult());
	    var c1= DatasetFactory.createConstraint('HTTPSTATUS', statusHttp, statusHttp, ConstraintType.MUST);
	    var c2= DatasetFactory.createConstraint('RESULTADO', retornoApi.getResult(), retornoApi.getResult(), ConstraintType.MUST);
		var c3= DatasetFactory.createConstraint('PROCESSO', "compras", "compras", ConstraintType.MUST);
	    var c4= DatasetFactory.createConstraint('DATA', data, data, ConstraintType.MUST);
	    var dataset = DatasetFactory.getDataset('dts_httpStatus', null, [c1,c2,c3,c4], null);
		if(dataset.getValue(0,"code")=="400"){
			log.info("Deu erro aqui"+dataset.getValue(0,"message"));
			throw java.lang.Exception(""+retornoApi2.errorMessage);
	    }
	} catch(err) {
		throw err + "retornoApi2";
	}
	return true;
}