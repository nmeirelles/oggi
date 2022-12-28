function intermediateconditional285() {
	var c1 = DatasetFactory.createConstraint("CODIGO", hAPI.getCardValue("ppf3"), hAPI.getCardValue("ppf3"), ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("EMP", hAPI.getCardValue("empresa_cod2"), hAPI.getCardValue("empresa_cod2"), ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("FILIAL", hAPI.getCardValue("filial_cod2"), hAPI.getCardValue("filial_cod2"), ConstraintType.MUST);
	var constraints = new Array(c1,c2,c3);
	var dataset = DatasetFactory.getDataset("ds_solcompras_aprovado", null, constraints, null);
	log.info("INFODEV  WKNumProces: "+getValue('WKNumProces')+" C7_CONAPRO "+dataset.getValue(0, "C7_CONAPRO"));
        gerajson();
	if(dataset.getValue(0, "C7_CONAPRO")=="X" ){
		throw "Pedido de compras " + hAPI.getCardValue("ppf3") + "Está com bloqueio orçamentario."
	}else{
		if(dataset.getValue(0, "C7_CONAPRO")=="B" || dataset.getValue(0, "C7_CONAPRO")=="L"){
			return true;
		}
		return false;
	}
}

function gerajson(){
	var indexes = hAPI.getChildrenIndexes("cotacao4");
	var childrenData4 = hAPI.getChildrenFromTable("cotacao4");

	// pegando os valores dos campos de cada linha do formulario pai x filho
	var fieldKeys4 = childrenData4.keySet().toArray();
	var items1 = [];

	for (var i = 0; i < indexes.length; i++) {
		var item = {
			"C7_ITEMSC"	: String(indexes[i]),
			"C7_PRODUTO": String(hAPI.getCardValue("codproduto___" + indexes[i])),
			"C7_QUANT"	: String(hAPI.getCardValue("quantidade___" + indexes[i]).replace(".","").replace(",",".")),
			"C7_PRECO"	: String(childrenData4.get("preco4___" + indexes[i])),
			"C7_XNFLUIG": String(hAPI.getCardValue('processoid')),
			"C7_CONTA"	: String(hAPI.getCardValue("codcontabil___" + indexes[i])),
			"C7_NUMSC"	: String(hAPI.getCardValue('solicitacao_protheus')),
			"C7_XDTORC"	: String(hAPI.getCardValue('dataorcamento___'+ indexes[i]).replaceAll("-","")),
			"C7_DATPRF"	: String(hAPI.getCardValue('entrega___'+ indexes[i]).replaceAll("-",""))
		}
		log.dir(item);
		//log.info("Montando os itens de cada fornecedor " + hAPI.getCardValue(fieldKeys4[i])+ " CNOME3 = " + hAPI.getCardValue("CNOME3") +" - "+getValue("WKNumProces"));
		if(hAPI.getCardValue("fornecedor4___" + indexes[i]) == hAPI.getCardValue("CNOME3") ){
			log.info("Montando os itens do fornecedor 3 " + hAPI.getCardValue(fieldKeys4[i])+ " CNOME3 = " + hAPI.getCardValue("CNOME3") +" - "+getValue("WKNumProces"));
			items1.push(item);
		}
		
	}

	log.info("Items Fornecedor 3 Compriemtno " + items1.length)+" - "+getValue("WKNumProces");

	if(items1.length>0){
		var data = {
			"ITENS" 	: items1,
			"C7_FORNECE": String(hAPI.getCardValue('CCOD1')),
			"C7_LOJA" 	: String(hAPI.getCardValue('CLOJA1')),
			"C7_COND" 	: String(hAPI.getCardValue('CODCOND1')),
			"C7_CONTATO": "",
			"C7_USER"	: String(hAPI.getCardValue('id_protheus_cotacao'))
		}
	}
	log.info("Json Fornecedor 3 " + JSON.stringify(data)+" - "+getValue("WKNumProces"));
}