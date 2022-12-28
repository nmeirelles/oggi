function intermediateconditional72() {
	var c1 = DatasetFactory.createConstraint("CODIGO", hAPI.getCardValue("NUM_RETORNO"), hAPI.getCardValue("NUM_RETORNO"), ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("EMP", hAPI.getCardValue("empresa_cod2"), hAPI.getCardValue("empresa_cod2"), ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("FILIAL", hAPI.getCardValue("filial_cod2"), hAPI.getCardValue("filial_cod2"), ConstraintType.MUST);
	var constraints = new Array(c1,c2,c3);
	var dataset = DatasetFactory.getDataset("ds_solcompras_aprovado", null, constraints, null);
	log.info("Solicitação de reembolso - Bloqueio orçamentario - WKNumProces: "+getValue('WKNumProces')+" C7_CONAPRO "+dataset.getValue(0, "C7_CONAPRO"));
	if(dataset.getValue(0, "C7_CONAPRO")=="X" ){
		throw "Pedido de compras " + hAPI.getCardValue("ppf3") + "Está com bloqueio orçamentario."
	}else{
		if(dataset.getValue(0, "C7_CONAPRO")=="B" || dataset.getValue(0, "C7_CONAPRO")=="L"){
			return true;
		}
		throw "Pedido de compras " + hAPI.getCardValue("NUM_RETORNO") + "Está com bloqueio orçamentario."
	}
}