function servicetask208(attempt, message) {
	for (i=0;i<4;i++){
		if(hAPI.getCardValue("ppf1")!=""){
			var c1 = DatasetFactory.createConstraint("pedido", hAPI.getCardValue("pppf1"), hAPI.getCardValue("ppf1"), ConstraintType.MUST);
			var c2 = DatasetFactory.createConstraint("emp", hAPI.getCardValue("empresa_cod2"), hAPI.getCardValue("empresa_cod2"), ConstraintType.MUST);
			var c3 = DatasetFactory.createConstraint("fil", hAPI.getCardValue("filial_cod2"), hAPI.getCardValue("filial_cod2"), ConstraintType.MUST);
			var constraints = new Array(c1,c2,c3);
			var dataset = DatasetFactory.getDataset("ds_abax_notas", null, constraints, null);
			if(dataset.rowsCount > 0){
				hAPI.setCardValue("nfprotheus",hAPI.getCardValue("nfprotheus")+dataset.getValue(0, "NOTAS"));
			}
		}

		if(hAPI.getCardValue("ppf2")!=""){
			var c1 = DatasetFactory.createConstraint("pedido", hAPI.getCardValue("pppf2"), hAPI.getCardValue("ppf2"), ConstraintType.MUST);
			var c2 = DatasetFactory.createConstraint("emp", hAPI.getCardValue("empresa_cod2"), hAPI.getCardValue("empresa_cod2"), ConstraintType.MUST);
			var c3 = DatasetFactory.createConstraint("fil", hAPI.getCardValue("filial_cod2"), hAPI.getCardValue("filial_cod2"), ConstraintType.MUST);
			var constraints = new Array(c1,c2,c3);
			var dataset = DatasetFactory.getDataset("ds_abax_notas", null, constraints, null);
			if(dataset.rowsCount > 0){
				hAPI.setCardValue("nfprotheus",hAPI.getCardValue("nfprotheus")+dataset.getValue(0, "NOTAS"));
			}
		}
		
		if(hAPI.getCardValue("ppf3")!=""){
			var c1 = DatasetFactory.createConstraint("pedido", hAPI.getCardValue("pppf3"), hAPI.getCardValue("ppf3"), ConstraintType.MUST);
			var c2 = DatasetFactory.createConstraint("emp", hAPI.getCardValue("empresa_cod2"), hAPI.getCardValue("empresa_cod2"), ConstraintType.MUST);
			var c3 = DatasetFactory.createConstraint("fil", hAPI.getCardValue("filial_cod2"), hAPI.getCardValue("filial_cod2"), ConstraintType.MUST);
			var constraints = new Array(c1,c2,c3);
			var dataset = DatasetFactory.getDataset("ds_abax_notas", null, constraints, null);
			if(dataset.rowsCount > 0){
				hAPI.setCardValue("nfprotheus",hAPI.getCardValue("nfprotheus")+dataset.getValue(0, "NOTAS"));
			}
		}
	}
	return true;
}