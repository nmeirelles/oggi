function servicetask417(attempt, message) {
/*    var c1 = DatasetFactory.createConstraint("CODIGO", hAPI.getCardValue("solicitacao_protheus"), hAPI.getCardValue("solicitacao_protheus"), ConstraintType.MUST);
    var c2 = DatasetFactory.createConstraint("EMP", hAPI.getCardValue("empresa_cod2"), hAPI.getCardValue("empresa_cod2"), ConstraintType.MUST);
    var c3 = DatasetFactory.createConstraint("FILIAL", hAPI.getCardValue("filial_cod2"), hAPI.getCardValue("filial_cod2"), ConstraintType.MUST);
    var constraints = new Array(c1,c2,c3);
    var dataset = DatasetFactory.getDataset("ds_solcompras_existe", null, constraints, null);
    log.info("INFODEV WKNumProces: "+getValue('WKNumProces')+"  C1_NUM  "+dataset.getValue(0, "C1_NUM") );
    if(dataset.getValue(0, "C1_NUM") == "" ||dataset.getValue(0, "C1_NUM") == null){
        //teste
        throw "Solicitação não localizado tentando reintegrar..."
    }*/
    var c1 = DatasetFactory.createConstraint("FLUIG", hAPI.getCardValue("processoid"), hAPI.getCardValue("processoid"), ConstraintType.MUST);
    var c2 = DatasetFactory.createConstraint("EMP", hAPI.getCardValue("empresa_cod2"), hAPI.getCardValue("empresa_cod2"), ConstraintType.MUST);
    
    var constraints = new Array(c1,c2);
    var dataset = DatasetFactory.getDataset("ds_solcompras_existeFluig", null, constraints, null);
    log.info("INFODEV WKNumProces: "+getValue('WKNumProces')+"  C1_NUM  "+dataset.getValue(0, "C1_NUM") );
    if(dataset.getValue(0, "C1_NUM") == "" ||dataset.getValue(0, "C1_NUM") == null){
        //teste
        if(nextSequenceId==DoublecheckSC){
            throw "Solicitação não localizado deve ser reintegrada! "
        }
        
    }else { 
        
        hAPI.setCardValue("solicitacao_protheus",dataset.getValue(0, "C1_NUM"));
        
    }
    return true;
}