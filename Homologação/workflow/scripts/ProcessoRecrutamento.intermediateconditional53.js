function intermediateconditional53(){
	log.info('intermediateconditional53')
	 var constraint = []
	 var atividade;
	 var numAtividade = parseInt(hAPI.getCardValue("IdAdmissao"))
	 log.info('numAtividade: '+numAtividade)
	 
	 	constraint.push(DatasetFactory.createConstraint('processId', 'ProcessoAdmissao', 'ProcessoAdmissao', ConstraintType.MUST));
	 	constraint.push(DatasetFactory.createConstraint('workflowProcessPK.processInstanceId',numAtividade,numAtividade, ConstraintType.MUST));
	 	var WorkflowProcess = DatasetFactory.getDataset('workflowProcess', null,constraint,null);
	  	  
	 	for(var i = 0; i < WorkflowProcess.rowsCount;i++){
		    var numProcesso = WorkflowProcess.getValue(i, "workflowProcessPK.processInstanceId");
		    	atividade = getActivity(numProcesso)
		    	log.info('atividade: '+atividade)
	 	}
	 	
		 if(atividade == 47){
			 log.info('Dentro do IF 47')
			 hAPI.setCardValue("Valid3","NAO")
			 return true
		 }else if(atividade != 1 &&  atividade != 2 &&  atividade != 4 &&  atividade != 6 &&  atividade != 8 &&  atividade != 40 &&  atividade != 44 &&  atividade != 47){
			 log.info('Dentro do IF 13')
			 hAPI.setCardValue("Valid3","SIM")
			 return true
		 }
}


function getActivity(numProcesso){
	log.info('function getActivity()')
	log.info('numProcesso: '+numProcesso)
	  var constraint = []

	  constraint.push(DatasetFactory.createConstraint('processHistoryPK.processInstanceId',numProcesso,numProcesso, ConstraintType.MUST))
	  constraint.push(DatasetFactory.createConstraint('returnLink', '', '', ConstraintType.MUST))
	  constraint.push(DatasetFactory.createConstraint('sqlLimit', '1', '1', ConstraintType.MUST));

	  var dtsHistory = DatasetFactory.getDataset('processHistory', null,constraint, null);
	  
	  return dtsHistory.getValue(0,"stateSequence")

	}

