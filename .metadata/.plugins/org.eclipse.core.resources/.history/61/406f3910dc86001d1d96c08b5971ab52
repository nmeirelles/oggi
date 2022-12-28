function displayFields(form,customHTML){ 
	var usuario    = getValue("WKUser");
	var empresa    = getValue("WKCompany");
	var processid  = getValue( "WKNumProces" );
	var codProcess = getValue("WKDef");
	var atividade  = getValue( "WKNumState" );
	var comment	   = getValue("WKUserComment")
	var mail = fluigAPI.getUserService().getCurrent().getEmail();
	var nome = fluigAPI.getUserService().getCurrent().getFullName();
	var idprotheus = fluigAPI.getUserService().getCurrent().getExtraData("idpId");
	var cpfUser = fluigAPI.getUserService().getCurrent().getExtraData("CPF");
	var empFil = fluigAPI.getUserService().getCurrent().getExtraData("EMPFIL");

	form.setShowDisabledFields(true);
	
	customHTML.append( "<script> var DFFormMode = '" + form.getFormMode() + "'; </script>" );
	customHTML.append( "<script> var DFUsuario = '" + usuario + "'; </script>" );
	customHTML.append( "<script> var DFEmpresa = '" + empresa + "'; </script>" );
	customHTML.append( "<script> var DFProcessId = '" + processid + "'; </script>" );
	customHTML.append( "<script> var DFCodProcess = '" + codProcess + "'; </script>" );
	customHTML.append( "<script> var DFAtividade = '" + atividade + "'; </script>" );
	customHTML.append( "<script> var comment = '" + comment + "'; </script>" );
	customHTML.append( "<script> var DFNome = '" + nome + "'; </script>" );
	customHTML.append( "<script> var DFCpf = '" + cpfUser + "'; </script>" );
	customHTML.append( "<script> var empFil = '" + empFil + "'; </script>" );
	customHTML.append( "<script> var empFil = '" + empFil + "'; </script>" );

	form.setValue("mail_USER", mail);
	form.setValue("C7_USER", idprotheus);

	if(atividade == '0'){
		form.setVisibleById('seccao_solicitante', true);
	}if(atividade == '2'){
		form.setVisibleById('seccao_solicitante', false);
		form.setVisibleById('seccao_aprovacao_gestor', true);
	}if(atividade == '8'){
		form.setVisibleById('seccao_solicitante', false);
		form.setVisibleById('seccao_aprovacao_gestor', true);
		form.setVisibleById('seccao_aprovacao_diretor', true);
	}if(atividade == '14'){
		form.setVisibleById('seccao_solicitante', false);
		form.setVisibleById('seccao_aprovacao_gestor', false);
		form.setVisibleById('seccao_aprovacao_diretor', false);
		form.setVisibleById('seccao_impressao_despesas', true);

	}if(atividade == '16'){
		form.setVisibleById('seccao_solicitante', false);
		form.setVisibleById('seccao_aprovacao_gestor', false);
		form.setVisibleById('seccao_aprovacao_diretor', false);
		form.setVisibleById('seccao_impressao_despesas', true);
		form.setVisibleById('seccao_validao_financeiro', true);
	}if(atividade == '6' || atividade == '20'){
		form.setVisibleById('seccao_solicitante', false);
		form.setVisibleById('seccao_aprovacao_gestor', false);
		form.setVisibleById('seccao_aprovacao_diretor', false);
		form.setVisibleById('seccao_impressao_despesas', true);
		form.setVisibleById('seccao_validao_financeiro', false);
	}
}

