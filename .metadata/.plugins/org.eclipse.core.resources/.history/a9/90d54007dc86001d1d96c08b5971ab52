function intermediateconditional235() {
	var c1 = DatasetFactory.createConstraint("CODIGO", hAPI.getCardValue("ppf2"), hAPI.getCardValue("ppf2"), ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("EMP", hAPI.getCardValue("empresa_cod2"), hAPI.getCardValue("empresa_cod2"), ConstraintType.MUST);
	var c3 = DatasetFactory.createConstraint("FILIAL", hAPI.getCardValue("filial_cod2"), hAPI.getCardValue("filial_cod2"), ConstraintType.MUST);
	var constraints = new Array(c1,c2,c3);
	var dataset = DatasetFactory.getDataset("ds_solcompras_aprovado", null, constraints, null);
	//log.info("INFODEV WKNumProces: "+getValue('WKNumProces')+"  C7_CONAPRO  "+dataset.getValue(0, "C7_CONAPRO") + " Cotação 2");
	if(dataset.getValue(0, "C7_CONAPRO")=="L"){
		return true;
	}else{
		//throw "Pedido de compras " + hAPI.getCardValue("ppf2") + "Está Aguardando aprovação no protheus.";
		return false;
	}
}