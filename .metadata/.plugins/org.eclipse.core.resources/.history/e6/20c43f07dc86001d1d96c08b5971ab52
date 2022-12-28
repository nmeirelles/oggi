function servicetask226(attempt, message) {
	log.info(">>>>>>>>>>>>>>>>>");
	var indexes = hAPI.getChildrenIndexes("pedidos");
	var childrenData = hAPI.getChildrenFromTable("pedidos");
	var items = [];	
	// pegando os valores dos campos de cada linha do formulario pai x filho
	var fieldKeys = childrenData.keySet().toArray();
	for (var i = 0; i < fieldKeys.length; i++) {
		if (fieldKeys[i].startsWith("codproduto___")) {
			var index = parseInt(fieldKeys[i].replace("codproduto___", ""));
			var item = { 
				"PRODUTO"   : String(childrenData.get("codproduto___" + index)),
				"CC"        : String(childrenData.get("cc___" + index)),
				"QUANTIDADE": String(childrenData.get("quantidade___" + index)),
				"OBSERVACAO": String(childrenData.get("obs___" + index)),
				"NUMFLUIG"  : String(hAPI.getCardValue('processo_id')),
				"SOLICIT"   : String(hAPI.getCardValue('id_protheus')),
				"USER"   	: String(hAPI.getCardValue('id_protheus')),
				"ENTREGA"	: String(childrenData.get("entrega___" + index).replaceAll("-","")),
				"CONTA"		: String(childrenData.get("codcontabil___" + index)),
				"VALOR"		: "0.0"
			}
			items.push(item);
		}
	}
	log.info(">>>>>>>>>>>>>>>>>");
	log.info(JSON.stringify(items));
	var clientService = fluigAPI.getAuthorizeClientService(); 
	try{
		var clientService = fluigAPI.getAuthorizeClientService();
		var data = {
			companyId : '0'+getValue("WKCompany") + '',
			serviceCode : 'Protheus',
			endpoint : '/rest/SOLCOMPRASINC/InclusaoSol',
			method : 'post',
			timeoutService: '100', 
			params : {
				"ITENS":items,
				"VENCIMENTO": String(hAPI.getCardValue("vencimento").replaceAll("-",""))
			},
			headers: {
				'tenantid': String(hAPI.getCardValue('empresa_cod2') + ',' + hAPI.getCardValue('filial_cod2')) 
			}
		}
		log.info(JSON.stringify(data));
		log.info(">>>>>>>>>>>>>>>>>Linha3");
	    var retornoApi = clientService.invoke(JSON.stringify(data));
		log.info(">>>>>>>>>>>>>>>>>Linha4");
		var statusHttp = retornoApi.getHttpStatusResult();
		log.info(">>>>>>>>>>>>>>>>>Linha5");
		log.info(retornoApi.getResult());
		if(statusHttp == 400){
		    throw java.lang.Exception("Incorrect Request");
		}else if(statusHttp == 401){
			throw java.lang.Exception("User is not authenticated");
		}else if(statusHttp == 403){
			throw java.lang.Exception("User does not have permission to perform the operation");
		}else if(statusHttp == 404){
			throw java.lang.Exception("Resource not found");
		}else if(statusHttp == 412){
			throw java.lang.Exception("Failed to move due to the need of an assignee to be appointed for the next task");
		}else if(statusHttp == 500){
			throw java.lang.Exception("Internal server error, see reply for more details");
		}
		log.info(">>>>>>>>>>>>>>>>>Linha6");
		// VERIFICA SE O RETORNO ESTA VAZIO
	    if(retornoApi.getResult() == null || retornoApi.getResult().isEmpty())
	        throw java.lang.Exception("Ocorreu uma falha no retorno da API!");
		log.info(">>>>>>>>>>>>>>>>>Linha7");
		log.info(retornoApi.getResult());
	    retornoApi = JSON.parse(retornoApi.getResult());
		log.info(">>>>>>>>>>>>>>>>>Linha8");
	    if( retornoApi.hasOwnProperty("NUMSOL") ){
	    	hAPI.setCardValue("retorno", retornoApi.NUMSOL);
	    }
		log.info(">>>>>>>>>>>>>>>>>Linha9");
	} catch(err) {
		//throw new Exception(err);
		throw err+JSON.stringify(data);
	}
	return true;
}