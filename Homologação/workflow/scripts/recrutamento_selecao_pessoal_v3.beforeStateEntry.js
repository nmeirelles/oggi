function beforeStateEntry(sequenceId){
    var atividadeAtual = getValue('WKNumState')
	if(sequenceId != 1) hAPI.setCardValue("atividadeAtual", String(sequenceId))
	if(sequenceId != 1) hAPI.setCardValue("atividadeAnterior", String(atividadeAtual))
	if(sequenceId == 10) hAPI.setCardValue("controleTI", "iniciado")
	var aprovacaoRH = hAPI.getCardValue('aprovacaoRH')
	if(sequenceId == 35 && aprovacaoRH == 'aprovado'){
		var constraints = []
		var departmentTI = hAPI.getCardValue("atividadeTI") == 'sim' ? 'true' : ""
		var equipSeguranca = hAPI.getCardValue("atividadeSegTrabalho") == 'sim' ? 'true' : ""
		var equipsTI = hAPI.getCardValue("ferramentasTrabalho")
		var usuarioEspelho = hAPI.getCardValue("acessoEspelho")
		var DFProcessId = hAPI.getCardValue("numeroProcesso")
		var nomeAprovado = hAPI.getCardValue("nomeAprovado")
		var emailAprovado = hAPI.getCardValue("emailAprovado")
		var contatoAprovado = hAPI.getCardValue("contatoAprovado")
		constraints.push(DatasetFactory.createConstraint("IDPROCESS",DFProcessId,DFProcessId, ConstraintType.MUST))
		constraints.push(DatasetFactory.createConstraint("DEPARTMENTTI",departmentTI,departmentTI, ConstraintType.MUST))
		constraints.push(DatasetFactory.createConstraint("EQUIPSEGURANCA",equipSeguranca,equipSeguranca, ConstraintType.MUST))
		constraints.push(DatasetFactory.createConstraint("EQUIPSTI",equipsTI,equipsTI, ConstraintType.MUST))
		constraints.push(DatasetFactory.createConstraint("USERESPELHO",usuarioEspelho,usuarioEspelho, ConstraintType.MUST))
		constraints.push(DatasetFactory.createConstraint("NOMEAPROVADO",nomeAprovado,nomeAprovado, ConstraintType.MUST))
		constraints.push(DatasetFactory.createConstraint("EMAILAPROVADO",emailAprovado,emailAprovado, ConstraintType.MUST))
		constraints.push(DatasetFactory.createConstraint("CONTATOAPROVADO",contatoAprovado,contatoAprovado, ConstraintType.MUST))
		var returnAbertura = DatasetFactory.getDataset('DS_START_ADMISSAO', null, constraints, null)
		var idAdmissao = String(returnAbertura.getValue(0, 'NUM_PROCESSO'))
		var processoAberto = idAdmissao.replace('.0','')
		hAPI.setCardValue('IdAdmissao', processoAberto)
		if(hAPI.getCardValue("IdAdmissao") == '') hAPI.setCardValue('IdAdmissao', processoAberto)
		hAPI.setTaskComments("admin", DFProcessId, 0, "Realizado a abertura do Processo de Admissão: "+processoAberto)
	}
}