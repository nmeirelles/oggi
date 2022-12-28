function beforeTaskSave(colleagueId,nextSequenceId,userList){
	if(nextSequenceId == 53){
		var constraints = [];
		var departmentTI = hAPI.getCardValue("departmentTI");
		var equipSeguranca = hAPI.getCardValue("equipSeguranca");
		var equipsTI = hAPI.getCardValue("controleInputs");
		var usuarioEspelho = hAPI.getCardValue("acessoEspelho");
		var DFProcessId = hAPI.getCardValue("DFProcessId");
		var nomeAprovado = hAPI.getCardValue("nomeAprovado");
		var emailAprovado = hAPI.getCardValue("emailAprovado");
		var contatoAprovado = hAPI.getCardValue("contatoAprovado");
		
		constraints.push(DatasetFactory.createConstraint("IDPROCESS",DFProcessId,DFProcessId, ConstraintType.MUST));
		constraints.push(DatasetFactory.createConstraint("DEPARTMENTTI",departmentTI,departmentTI, ConstraintType.MUST));
		constraints.push(DatasetFactory.createConstraint("EQUIPSEGURANCA",equipSeguranca,equipSeguranca, ConstraintType.MUST));
		constraints.push(DatasetFactory.createConstraint("EQUIPSTI",equipsTI,equipsTI, ConstraintType.MUST));
		constraints.push(DatasetFactory.createConstraint("USERESPELHO",usuarioEspelho,usuarioEspelho, ConstraintType.MUST));
		constraints.push(DatasetFactory.createConstraint("NOMEAPROVADO",nomeAprovado,nomeAprovado, ConstraintType.MUST));
		constraints.push(DatasetFactory.createConstraint("EMAILAPROVADO",emailAprovado,emailAprovado, ConstraintType.MUST));
		constraints.push(DatasetFactory.createConstraint("CONTATOAPROVADO",contatoAprovado,contatoAprovado, ConstraintType.MUST));
		var returnAbertura = DatasetFactory.getDataset('DS_START_ADMISSAO', null, constraints, null);


		var idAdmissao = parseInt(returnAbertura.getValue(0, 'NUM_PROCESSO'))
		log.info("<<<<<<<<<<<<<< beforeTaskSave >>>>>>>>>>>")
		log.info("NUM_PROCESSO: "+idAdmissao)
		
		hAPI.setCardValue('IdAdmissao', idAdmissao);
		
		if(hAPI.getCardValue("IdAdmissao") == ''){
			hAPI.setCardValue('IdAdmissao', idAdmissao);
		}
		
		hAPI.setTaskComments("000045", DFProcessId, 0, "Realizado a abertura do Processo de Admissão: "+idAdmissao);
	}
}