function servicetask86(attempt, message) {
	var indexes = hAPI.getChildrenIndexes("pedidos");
	var childrenData = hAPI.getChildrenFromTable("pedidos");
	var items = [];
	// pegando os valores dos campos de cada linha do formulario pai x filho
	var fieldKeys = childrenData.keySet().toArray();
	for (var i = 0; i < fieldKeys.length; i++) {
		if (fieldKeys[i].startsWith("codproduto___")) {
			var index = parseInt(fieldKeys[i].replace("codproduto___", ""));
			var item = {
				"ITEM"		: String(index),
				"PRODUTO"   : String(childrenData.get("codproduto___" + index)),
				"CC"        : String(childrenData.get("cc___" + index)),
				"QUANTIDADE": String(childrenData.get("quantidade___" + index)),
				"OBSERVACAO": String(childrenData.get("obs___" + index)),
				"NUMFLUIG"  : String(getValue('WKNumProces')),
				"SOLICIT"   : String(hAPI.getCardValue('id_protheus')),
				"USER"   	: String(hAPI.getCardValue('id_protheus')),
				"ENTREGA"	: String(childrenData.get("entrega___" + index).replaceAll("-","")),
				"CONTA"		: String(childrenData.get("codcontabil___" + index)),
				"VALOR"		: "0.0"
			}
			items.push(item);
		}
	}
	var clientService = fluigAPI.getAuthorizeClientService(); 
	try{
		var data = {
			companyId : String('01'),
			serviceCode : 'Protheus',
			endpoint : '/rest/SOLCOMPRASINC/InclusaoSol',
			method : 'post',
			timeoutService: '500', 
			params : {
				"ITENS":items,
				"VENCIMENTO": String(hAPI.getCardValue("vencimento").replaceAll("-",""))
			},
			headers: {
				'tenantid': String(hAPI.getCardValue('empresa_cod2') + ',' + hAPI.getCardValue('filial_cod2')) 
			}
		}
		log.info(JSON.stringify(data));
	    //hAPI.setTaskComments("000055", getValue("WKProcess"),  0, JSON.stringify(data));
	    var retornoApi = clientService.invoke(JSON.stringify(data));
	    var retornoApi2 = JSON.parse(retornoApi.getResult());
		var statusHttp = retornoApi.getHttpStatusResult();
		log.info(retornoApi.getResult());
		// VERIFICA SE O RETORNO ESTA VAZIO
	    if(retornoApi.getResult() == null || retornoApi.getResult().isEmpty())
	        throw java.lang.Exception("Ocorreu uma falha no retorno da API!");
	    var c1= DatasetFactory.createConstraint('HTTPSTATUS', statusHttp, statusHttp, ConstraintType.MUST);
	    var c2= DatasetFactory.createConstraint('RESULTADO', retornoApi.getResult(), retornoApi.getResult(), ConstraintType.MUST);
		var c3= DatasetFactory.createConstraint('PROCESSO', "compras", "compras", ConstraintType.MUST);
	    var c4= DatasetFactory.createConstraint('DATA', data, data, ConstraintType.MUST);
	    var dataset = DatasetFactory.getDataset('dts_httpStatus', null, [c1,c2,c3,c4], null);
	   if(dataset.getValue(0,"code")=="400"){
	    	throw dataset.getValue(0,"message");
	    }
	    hAPI.setCardValue("solicitacao_protheus", retornoApi2.NUMSOL);
	} catch(err) {
		throw err + JSON.stringify(data);
	}
	return true;
}