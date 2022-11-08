function servicetask315(attempt, message) {
	log.info("Solicitação de compras Fornecedor 2 - "+getValue("WKNumProces"));
	var indexes = hAPI.getChildrenIndexes("cotacao4");
	var childrenData4 = hAPI.getChildrenFromTable("cotacao4");

	// pegando os valores dos campos de cada linha do formulario pai x filho
	var fieldKeys4 = childrenData4.keySet().toArray();
	var items1 = [];

	for (var i = 0; i < indexes.length; i++) {
		var ii = String( hAPI.getCardValue("itemsc4___" + indexes[i]) ).split("___");
		log.info("indice da cotação: "+ii[1]);
		var item = {
			"C7_ITEMSC"	: String(ii[1]),
			"C7_PRODUTO": String(hAPI.getCardValue("codproduto___" + ii[1])),
			"C7_QUANT"	: String(hAPI.getCardValue("quantidade___" + ii[1]).replace(".","").replace(",",".")),
			"C7_PRECO"	: String(hAPI.getCardValue("preco4___" + indexes[i])),
			"C7_XNFLUIG": String(getValue("WKNumProces")),
			"C7_CONTA"	: String(hAPI.getCardValue("codcontabil___" + ii[1])),
			"C7_NUMSC"	: String(hAPI.getCardValue('solicitacao_protheus')),
			"C7_DATPRF"	: String(hAPI.getCardValue('entrega___'+ ii[1]).replaceAll("-","")),
			"C7_IPI"	: String(hAPI.getCardValue("ipi4___" + indexes[i]).replace(",",".")),
			"C7_XDTORC"	: String(hAPI.getCardValue('dataorcamento___'+ ii[1]).replaceAll("-","")),
		}
		
		if(ii[0]==2){
			log.info("Montando os itens do fornecedor 1 " + hAPI.getCardValue(fieldKeys4[i])+ " CNOME1 = " + hAPI.getCardValue("CNOME1") +" - "+getValue("WKNumProces"));
			items1.push(item);
		}

		log.dir(item);

	}

	log.info("Items Fornecedor 2 Compriemtno " + items1.length)+" - "+getValue("WKNumProces");

	if(items1.length>0){
		var clientService = fluigAPI.getAuthorizeClientService();
		try{
			var data = {
				companyId : 	String('0'+getValue("WKCompany")),
				serviceCode :	'Protheus',
				endpoint : 		'/rest/FLGCOM00/PedidodeCompras',
				method : 		'post',
				timeoutService: '500', 
				params : {
					"ITENS" 	: items1,
					"C7_FORNECE": String(hAPI.getCardValue('CCOD2')),
					"C7_LOJA" 	: String(hAPI.getCardValue('CLOJA2')),
					"C7_COND" 	: String(hAPI.getCardValue('CODCOND2')),
					"C7_FRETE"	: String(hAPI.getCardValue('frete2')),
					"C7_CONTATO": "",
					"C7_MOEDA"  : parseInt(hAPI.GetCardValue("moeda2")),
                                        "C7_USER"	: String(hAPI.getCardValue('id_protheus_cotacao'))
				},
				headers: {
					"tenantid" : String(hAPI.getCardValue('empresa_cod2') + ',' + hAPI.getCardValue('filial_cod2') ) 
				}
			}
			log.info("Json Fornecedor 2" + JSON.stringify(data)+" - "+getValue("WKNumProces"));
		    //hAPI.setTaskComments(getValue('WKUser'), getValue("WKProces"),  0, JSON.stringify(data));
			var retornoApi = clientService.invoke(JSON.stringify(data));
			var retornoApi2 = JSON.parse(retornoApi.getResult());
			var statusHttp = retornoApi.getHttpStatusResult();
			// VERIFICA SE O RETORNO ESTA VAZIO
			if(retornoApi.getResult() == null || retornoApi.getResult().isEmpty())
				throw java.lang.Exception("Ocorreu uma falha no retorno da API!"+" - "+getValue("WKNumProces"));
			log.info(">>>>>>>>>>>>>>>>>Linha7 Fornecedor 2 "+" - "+getValue("WKNumProces"));
			log.info(retornoApi.getResult());
			log.info(">>>>>>>>>>>>>>>>>Linha8 Fornecedor 2 "+" - "+getValue("WKNumProces"));
			var c1= DatasetFactory.createConstraint('HTTPSTATUS', statusHttp, statusHttp, ConstraintType.MUST);
			var c2= DatasetFactory.createConstraint('RESULTADO', retornoApi.getResult(), retornoApi.getResult(), ConstraintType.MUST);
			log.info(">>>>>>>>>>>>>>>>>Linha9 Fornecedor 2 "+" - "+getValue("WKNumProces"));
			var c3= DatasetFactory.createConstraint('PROCESSO', "compras", "compras", ConstraintType.MUST);
			var c4= DatasetFactory.createConstraint('DATA', data, data, ConstraintType.MUST);
			var dataset = DatasetFactory.getDataset('dts_httpStatus', null, [c1,c2,c3,c4], null);
			log.info(">>>>>>>>>>>>>>>>>Linha10 Fornecedor 2 "+" - "+getValue("WKNumProces"));
			log.info(".rowsCount "+dataset.rowsCount+" - "+getValue("WKNumProces"));
			log.dir(dataset);
			if(dataset.getValue(0,"code")=="400"){
				log.info(">>>>>>>>>>>>>>>>>Linha11 Fornecedor 2 "+" - "+getValue("WKNumProces"));
				throw dataset.getValue(0,"message");
			}if(retornoApi2.code==500){
				log.info(">>>>>>>>>>>>>>>>>Linha11 Fornecedor 1 "+" - "+getValue("WKNumProces"));
				throw dataset.getValue(0,"message");
			}
			hAPI.setCardValue("ppf2",retornoApi2.C7_NUM);
		} catch(err) {
			throw err + JSON.stringify(data);
		}
	}
	return true;
}