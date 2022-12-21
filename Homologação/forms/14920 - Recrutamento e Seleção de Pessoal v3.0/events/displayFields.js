function displayFields(form,customHTML){
	log.info('displayFields.js begin: Recrutamento e Seleção de Pessoal v3');

	form.setShowDisabledFields(true);
    //form.setHidePrintLink(true);
	
	form.setVisibleById('divCamposControle', false);

	let WKNumState = getValue("WKNumState");
    form.setValue("atividadeAtual", WKNumState);
    customHTML.append("<script> var WKNumState = '" + WKNumState + "';</script>");

	let atividadeAnterior = form.getValue('atividadeAnterior');
	
	if(WKNumState == '0'){
		var dataSolicitacao = getDatetimeNow();
		var nome = fluigAPI.getUserService().getCurrent().getFullName();
		var mail = fluigAPI.getUserService().getCurrent().getEmail();
		var idprotheus = fluigAPI.getUserService().getCurrent().getExtraData("IDPROTHEUS");
		
		form.setValue("solicitante", nome);
		form.setValue("email_solicitante", mail);
		form.setValue("id_protheus_solicitante", idprotheus);
		form.setValue("dataSolicitacao", dataSolicitacao);

		form.setVisibleById('divAprovacaoGestor', false);
		form.setVisibleById('revisaoRequisicao', false);
		form.setVisibleById('aprovacaoDiretoria', false);
		form.setVisibleById('assumirVaga', false);
		form.setVisibleById('ti', false);
		form.setVisibleById('facilities', false);
		form.setVisibleById('divSegurancaTrabalho', false);
		form.setVisibleById('aberturaSubprocesso', false);
	}

	if(WKNumState == '95'){
		form.setVisibleById('revisaoRequisicao', false);
		form.setVisibleById('aprovacaoDiretoria', false);
		form.setVisibleById('assumirVaga', false);
		form.setVisibleById('ti', false);
		form.setVisibleById('facilities', false);
		form.setVisibleById('divSegurancaTrabalho', false);
		form.setVisibleById('aberturaSubprocesso', false);
	}

	if(WKNumState == '68'){
		form.setVisibleById('aprovacaoDiretoria', false);
		form.setVisibleById('assumirVaga', false);
		form.setVisibleById('ti', false);
		form.setVisibleById('facilities', false);
		form.setVisibleById('divSegurancaTrabalho', false);
		form.setVisibleById('aberturaSubprocesso', false);
	}

	if(WKNumState == '71'){
		form.setVisibleById('aprovacaoDiretoria', false);
		form.setVisibleById('assumirVaga', false);
		form.setVisibleById('ti', false);
		form.setVisibleById('facilities', false);
		form.setVisibleById('divSegurancaTrabalho', false);
		form.setVisibleById('aberturaSubprocesso', false);
	}
	if(WKNumState == '71' && atividadeAnterior == '82'){
		form.setVisibleById('aprovacaoDiretoria', true);
		form.setVisibleById('revisaoRequisicao', false);
	}

	if(WKNumState == '74'){
		form.setVisibleById('assumirVaga', false);
		form.setVisibleById('ti', false);
		form.setVisibleById('facilities', false);
		form.setVisibleById('divSegurancaTrabalho', false);
		form.setVisibleById('aberturaSubprocesso', false);
	}

	if(WKNumState == '2'){
		form.setVisibleById('aberturaSubprocesso', false);
	}

	if(WKNumState == '10'){
		form.setVisibleById('revisaoRequisicao', false);
		form.setVisibleById('aprovacaoDiretoria', false);
		form.setVisibleById('assumirVaga', false);
		form.setVisibleById('facilities', false);
		form.setVisibleById('divSegurancaTrabalho', false);
		form.setVisibleById('aberturaSubprocesso', false);
	}

	if(WKNumState == '56'){
		form.setVisibleById('revisaoRequisicao', false);
		form.setVisibleById('aprovacaoDiretoria', false);
		form.setVisibleById('assumirVaga', false);
		form.setVisibleById('ti', false);
		form.setVisibleById('divSegurancaTrabalho', false);
		form.setVisibleById('aberturaSubprocesso', false);
	}

	if(WKNumState == '91'){
		form.setVisibleById('revisaoRequisicao', false);
		form.setVisibleById('aprovacaoDiretoria', false);
		form.setVisibleById('assumirVaga', false);
		form.setVisibleById('ti', false);
		form.setVisibleById('facilities', false);
		form.setVisibleById('aberturaSubprocesso', false);
	}

	// Validation HR Section
	log.info('validaInfo: '+validaInfo(form))
	if(validaInfo(form) == true && WKNumState != '0'){
		form.setVisibleById('salarioInformadoRH', true);
		getData(form,customHTML);
	}else{
		form.setVisibleById('salarioInformadoRH', false);
	}

	if(WKNumState == '10' || WKNumState == '56' || WKNumState == '91'){
		var vagaConfidencial = form.getValue('vagaConfidencial')
		if(vagaConfidencial == 'sim') form.setVisibleById('vagaConfidencial', false);
	}

	var ajudaCusto = form.getValue('ajudaCusto');
	if(ajudaCusto == 'sim') form.setVisibleById('ajudaCusto', true);
	else form.setVisibleById('ajudaCusto', false);

	var tipo = form.getValue('tipo');
	if(tipo == 'outrosTipoContratacao') form.setVisibleById('outrosTipoContratacao', true);
	else form.setVisibleById('outrosTipoContratacao', false);

	var vaga = form.getValue('vaga');
	if(vaga == 'aumentoquadro') form.setVisibleById('aumentoquadro', true), form.setVisibleById('colaborador', false)
	else if(vaga != '' && vaga != 'aumentoquadro') form.setVisibleById('aumentoquadro', false), form.setVisibleById('colaborador', true)
	else form.setVisibleById('aumentoquadro', false), form.setVisibleById('colaborador', false)

	var outrosFerramentasTrabalho = form.getValue('outrosFerramentasTrabalho');
	if(outrosFerramentasTrabalho == 'on') form.setVisibleById('divoutrosFerramentasTrabalho', true);
	else form.setVisibleById('divoutrosFerramentasTrabalho', false);

	var outrosAcessos = form.getValue('outrosAcessos');
	if(outrosAcessos == 'on') form.setVisibleById('divoutrosAcessos', true);
	else form.setVisibleById('divoutrosAcessos', false);

	var aprovacaoRH = form.getValue('aprovacaoRH');
	if(aprovacaoRH == 'aprovado') form.setVisibleById('candidatoAprovado', true);
	else form.setVisibleById('candidatoAprovado', false);

}

function validaInfo(form){
	var mail = fluigAPI.getUserService().getCurrent().getEmail();
	var groupsUser = fluigAPI.getUserService().getCurrent().getGroups()
	if(form.getValue('email_solicitante') == mail) return true
	if(groupsUser.indexOf('RH') != -1) return true
	if(groupsUser.indexOf('Diretoria') != -1) return true
	return false
}

function getDatetimeNow(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm
    today = dd + '/' + mm + '/' + yyyy;
    return today;
}

function getData(form,customHTML){
    var dataRequisicao = form.getValue('dataSolicitacao');
    var requisicao = form.getValue('numeroProcesso');
    var requisitante = form.getValue('solicitante');
    var empresa = form.getValue('filial');
    var centroCusto = form.getValue('centroCusto');
    var cargo = form.getValue('cargo');
    var salario = form.getValue('salario');
    var beneficios = '';
    if(form.getValue("refeicaoLocal") == 'on') beneficios = beneficios + 'Refeição no Local,';
    if(form.getValue("vtEstacionamento") == 'on') beneficios = beneficios + 'VT / Estacionamento,';
    if(form.getValue("convenioMedico") == 'on') beneficios = beneficios + 'Convênio Médico,';
    if(form.getValue("convenioOdontologico") == 'on') beneficios = beneficios + 'Convênio Odontológico,';
    var tipoContratacao = form.getValue("tipo");
	if(tipoContratacao == 'outrosTipoContratacao') tipoContratacao = form.getValue("outrosTipoContratacao");
    var tipoVaga = form.getValue('vaga');
    var principaisAtividades = form.getValue('atividades');
    var escolaridade = form.getValue('escolaridade');
    var conhecimento  = form.getValue('conhecimento');
    var tecnologiaInformacao = '';
	if(form.getValue('celular') == 'on') tecnologiaInformacao = tecnologiaInformacao + 'Celular,';
	if(form.getValue('notebook') == 'on') tecnologiaInformacao = tecnologiaInformacao + 'Notebook,';
	if(form.getValue('email') == 'on') tecnologiaInformacao = tecnologiaInformacao + 'Email,';
	if(form.getValue('fluig') == 'on') tecnologiaInformacao = tecnologiaInformacao + 'Fluig,';
	if(form.getValue('protheus') == 'on') tecnologiaInformacao = tecnologiaInformacao + 'Protheus,';
	if(form.getValue('abax') == 'on') tecnologiaInformacao = tecnologiaInformacao + 'Abax,';
	if(form.getValue('outrosAcessos') == 'on') tecnologiaInformacao = tecnologiaInformacao + form.getValue('outroAcesso') +',';
    var carro = form.getValue('carro');
	if(carro == 'on') carro = 'Carro';
	var compras = form.getValue('compras');
	if(compras == 'on') compras = 'Mesa e Cadeira';
	var equipamentoSegTrab = form.getValue('segurancaTrabalho');
	if(equipamentoSegTrab == 'on') equipamentoSegTrab = 'EPI';
    var nomeCandidatoAprovado = '';
	var candidatosAprovados = form.getChildrenIndexes("candidatosAprovados");
	for(var i = 0; i < candidatosAprovados.length; i++){;
		var nome = form.getValue('nomeAprovado___' + candidatosAprovados[i]) ;
		nomeCandidatoAprovado = nomeCandidatoAprovado + nome + '';
	};
	var obs = form.getValue('obsRevisaoRequisicao');
	var ajudaCusto = form.getValue('valorAjudaCusto');
	var horarioTrabalho = form.getValue('horarioTrabalho');

    var dados = {
    	'dataRequisicao': dataRequisicao,
    	'requisicao': requisicao,
    	'requisitante': requisitante,
    	'empresa': empresa,
    	'centroCusto': centroCusto,
    	'cargo': cargo,
    	'salario': salario,
    	'beneficios': beneficios,
    	'tipoContratacao': tipoContratacao,
    	'tipoVaga': tipoVaga,
    	'principaisAtividades': principaisAtividades,
    	'escolaridade': escolaridade,
    	'conhecimento': conhecimento,
    	'tecnologiaInformacao': tecnologiaInformacao,
    	'carro': carro,
    	'compras': compras,
    	'equipamentoSegTrab': equipamentoSegTrab,
    	'nomeCandidatoAprovado': nomeCandidatoAprovado,
        'versaoDoc': '',
		'obs': obs,
		'ajudaCusto': ajudaCusto,
		'horarioTrabalho': horarioTrabalho
    };
	var json = JSONUtil.toJSON(dados);
	customHTML.append("<script> var dadosDoc = " + json + ";</script>");
}