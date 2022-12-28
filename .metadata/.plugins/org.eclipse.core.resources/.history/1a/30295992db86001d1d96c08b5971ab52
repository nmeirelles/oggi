function displayFields(form,customHTML){ 
	var usuario    = getValue("WKUser");
	var empresa    = getValue("WKCompany");
	var processid  = getValue( "WKNumProces" );
	var codProcess = getValue("WKDef");
	var atividade  = getValue( "WKNumState" );
	var comment	   = getValue("WKUserComment")
	var nome = fluigAPI.getUserService().getCurrent().getFullName();
	var mail = fluigAPI.getUserService().getCurrent().getEmail();
	var idprotheus = fluigAPI.getUserService().getCurrent().getExtraData("IDPROTHEUS")
	
	
	form.setValue("DFProcessId", processid);
	customHTML.append( "<script>var DFFormMode = '" + form.getFormMode() + "';" );
	customHTML.append( "var DFUsuario = '" + usuario + "';" );
	customHTML.append( "var DFEmpresa = '" + empresa + "';" );
	customHTML.append( "var DFProcessId = '" + processid + "';" );
	customHTML.append( "var DFCodProcess = '" + codProcess + "';" );
	customHTML.append( "var DFAtividade = '" + atividade + "';" );
	customHTML.append( "var DFAtividade = '" + atividade + "';" );
	customHTML.append( "var idProtheus = '" + idprotheus + "';" );
	customHTML.append( "var comment = '" + comment + "';" );
	if(atividade == '0'){
		form.setVisibleById('seccao_definicao_vaga', true);
		form.setValue("solicitante", nome);
		form.setValue("email_solicitante", mail);
	}
	if(atividade == '2'){
		form.setVisibleById('seccao_definicao_vaga', true);
		//form.setVisibleById('seccao_aprovacao_de_vaga', true);
		customHTML.append( "$('#substitudoColaborador').show();");

	}
	if(atividade == '8'){
		form.setVisibleById('seccao_definicao_vaga', true);
		form.setVisibleById('seccao_aprovacao_de_vaga', true);
		form.setVisibleById('seccao_analise_de_curriculo', true);
	}
	if(atividade == '10'){
		form.setVisibleById('seccao_definicao_vaga', true);
		form.setVisibleById('seccao_aprovacao_de_vaga', true);
		form.setVisibleById('seccao_ti_separar_ferramentas_de_trabalho', true);
	}
	if(atividade == '15'){
		form.setVisibleById('seccao_definicao_vaga', true);
		form.setVisibleById('seccao_aprovacao_de_vaga', true);
		form.setVisibleById('seccao_ti_separar_ferramentas_de_trabalho', true);
		form.setVisibleById('seccao_analise_de_curriculo', true);
		form.setVisibleById('seccao_rh_agenda_entrevista', true);
	}
	if(atividade == '19'){
		form.setVisibleById('seccao_definicao_vaga', true);
		form.setVisibleById('seccao_aprovacao_de_vaga', true);
		form.setVisibleById('seccao_ti_separar_ferramentas_de_trabalho', true);
		form.setVisibleById('seccao_analise_de_curriculo', true);
		form.setVisibleById('seccao_rh_agenda_entrevista', true);
		form.setVisibleById('seccao_abertura_de_subprocesso', true);
	}
  	if(atividade == '27'){
		form.setVisibleById('seccao_definicao_vaga', true);
		form.setVisibleById('seccao_aprovacao_de_vaga', true);
		form.setVisibleById('seccao_analise_de_curriculo', true);
		form.setVisibleById('seccao_analise_de_curriculo', true);
	}
	if(atividade == '53'){
		form.setVisibleById('seccao_definicao_vaga', true);
		form.setVisibleById('seccao_aprovacao_de_vaga', true);
		form.setVisibleById('seccao_ti_separar_ferramentas_de_trabalho', true);
		form.setVisibleById('seccao_analise_de_curriculo', true);
		form.setVisibleById('seccao_rh_agenda_entrevista', true);
		form.setVisibleById('seccao_abertura_de_subprocesso', true);
	}
	if(atividade == '49'){
		form.setVisibleById('seccao_definicao_vaga', true);
		form.setVisibleById('seccao_aprovacao_de_vaga', true);
	}

	if(atividade == '56'){
		form.setVisibleById('seccao_definicao_vaga', true);
		form.setVisibleById('seccao_facilities', true);
	}
	customHTML.append( "</script>" );
}