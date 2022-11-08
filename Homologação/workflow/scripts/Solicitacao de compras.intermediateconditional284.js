function intermediateconditional284() {
	var c1 = DatasetFactory.createConstraint("CODIGO", hAPI.getCardValue("ppf3"), hAPI.getCardValue("ppf3"), ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("EMP", hAPI.getCardValue("empresa_cod2"), hAPI.getCardValue("empresa_cod2"), ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("FILIAL", hAPI.getCardValue("filial_cod2"), hAPI.getCardValue("filial_cod2"), ConstraintType.MUST);
	var constraints = new Array(c1,c2,c3);
	var dataset = DatasetFactory.getDataset("ds_solcompras_aprovado", null, constraints, null);
	log.info("INFODEV WKNumProces: "+getValue('WKNumProces')+"  C7_CONAPRO  "+dataset.getValue(0, "C7_CONAPRO") + " Cotação 3");
	
	if(dataset.getValue(0, "C7_CONAPRO")=="L"){
		return true;
	}else{
		//throw "Pedido de compras " + hAPI.getCardValue("ppf3") + "Está Aguardando aprovação no protheus.";
		return false;
	}
}