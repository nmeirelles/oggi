function notificarViaEmail(nextSequenceId) {
	setLog("INICIANDO FUNCAO - NOTIFICAR VIA E-MAIL");
	
	var processInstanceId = getValue("WKNumProces");

	// =====================================
	// DESTINATARIOS DO E-MAIL
	var solicitanteMail = mail_USER

	// =====================================
	// ASSUNTO DO E-MAIL
	var isEnviarEmail = false;
	var subject = ''
	var body = ''
	if(nextSequenceId == '6'){
		subject = "Solicitaçao de reembolso cancelada";	
		body = 'Sua solicitaçao de reembolso foi cancelada, favor entrar em contato com o seu Gestor!'
	}else{
		subject = "Solicitaçao de reembolso realizada";
		body = 'Solicitaçao de Reembolso foi realizada com sucesso!'
	}
	
	
	// =====================================
	// MENSAGEM DO E-MAIL
	

	setLog(">>> NOTIFICAR VIA E-MAIL <<< CONTEUDO: " + body);
	
	constraints.push(DatasetFactory.createConstraint("BODY", body, null, ConstraintType.MUST));
	var dataset = DatasetFactory.getDataset("DTS_NOTIFICAR_POR_EMAIL", null, constraints, null);

	if(dataset.rowsCount > 0) {
		var status = dataset.getValue(0, "STATUS");
		var mensagem = dataset.getValue(0, "MENSAGEM");
		setLog("ENCAMINHAR E-MAIL | STATUS: " + status + " | MENSAGEM: " + mensagem);
	}
}

/**
 * Recuperar o e-mail pela matricula do usuário
 * @param matricula
 * @returns {String}
 */
function getMailPorMatricula(matricula) {
	setLog("INICIANDO FUNCAO - getMailPorMatricula (" + matricula + ")");
	
	var mailRet = "";
	var constraints = [];
	constraints.push(DatasetFactory.createConstraint("colleaguePK.colleagueId", matricula, matricula, ConstraintType.MUST));
	var dataset = DatasetFactory.getDataset("colleague", null, constraints, null);

	setLog("FUNCAO getMailPorMatricula: (QTD) " + dataset.rowsCount);
	
	if(dataset.rowsCount > 0) {
		mailRet = dataset.getValue(0, "mail");
		
		setLog("FUNCAO getMailPorMatricula: (MAIL) " + mailRet);
	}
	
	setLog("FUNCAO getMailPorMatricula: (MAIL RET) " + mailRet);
	
	return mailRet;
}


