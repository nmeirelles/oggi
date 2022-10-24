function beforeTaskSave(colleagueId,nextSequenceId,userList){
	log.info('recrutamento_selecao_pessoal_v3.beforeTaskSave.js begin')

	var atividadeAtual = getValue('WKNumState')

	if(nextSequenceId != 1) hAPI.setCardValue("atividadeAtual", String(nextSequenceId))
	if(nextSequenceId != 1) hAPI.setCardValue("atividadeAnterior", String(atividadeAtual))
	
	var aprovacaoRH = hAPI.getCardValue('aprovacaoRH')
	log.info('aprovacaoRH: '+aprovacaoRH)

	if(nextSequenceId == 35 && aprovacaoRH == 'aprovado'){
		var constraints = []

		var departmentTI = hAPI.getCardValue("atividadeTI") == 'sim' ? 'true' : ""
		log.info('departmentTI: '+departmentTI)
		
		var equipSeguranca = hAPI.getCardValue("atividadeSegTrabalho") == 'sim' ? 'true' : ""
		log.info('equipSeguranca: '+equipSeguranca)
		
		var equipsTI = hAPI.getCardValue("ferramentasTrabalho")
		log.info('equipsTI: '+equipsTI)
		
		var usuarioEspelho = hAPI.getCardValue("acessoEspelho")
		log.info('usuarioEspelho: '+usuarioEspelho)
		
		var DFProcessId = hAPI.getCardValue("numeroProcesso")
		log.info('DFProcessId: '+DFProcessId)
		
		var nomeAprovado = hAPI.getCardValue("nomeAprovado")
		log.info('nomeAprovado: '+nomeAprovado)
		
		var emailAprovado = hAPI.getCardValue("emailAprovado")
		log.info('emailAprovado: '+emailAprovado)
		
		var contatoAprovado = hAPI.getCardValue("contatoAprovado")
		log.info('contatoAprovado: '+contatoAprovado)
		
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
		log.info("<<<<<<<<<<<<<< beforeTaskSave >>>>>>>>>>>")
		log.info("NUM_PROCESSO: "+idAdmissao)

		var processoAberto = idAdmissao.replace('.0','')
		
		hAPI.setCardValue('IdAdmissao', processoAberto)
		
		if(hAPI.getCardValue("IdAdmissao") == ''){
			hAPI.setCardValue('IdAdmissao', processoAberto)
		}
		
		hAPI.setTaskComments("admin", DFProcessId, 0, "Realizado a abertura do Processo de Admissão: "+processoAberto)
	}
}