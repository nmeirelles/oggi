function displayFields(form, customHTML) {
	var usuarioAtual = fluigAPI.getUserService().getCurrent();
	var nome = usuarioAtual.getFullName();
	var email = usuarioAtual.getEmail();
	var ID_nome = usuarioAtual.getId();
	customHTML.append('<script>');
	customHTML.append("function getWKNumState(){ return " + getValue('WKNumState') + "}");
	task = parseInt(getValue("WKNumState"));
	var completo = getValue("WKCompletTask");
	var cont=3;
	switch(task){
		case 4:
			customHTML.append("$('#ADICIONARITEM').show();");
		case 0 : 
		case INICIO :
			hoje = new Date();
			form.setValue("dataorcamento",hoje.getFullYear()+"-"+( hoje.getMonth()+1 ) +"-"+hoje.getDate());
			// Salva o email no formulário
			form.setValue('email_solicitante', email);
			form.setValue("id_protheus", fluigAPI.getUserService().getCurrent().getExtraData("IDPROTHEUS"));
			//Salva o nome no formulário
			form.setValue("nome_solicitante", nome);
			// Salva o ID do usuario no formulário
			form.setValue("ID_solicitante", ID_nome);
			form.setValue("entrega", dataAtual());
			// Salva o ID do usuario do protheus no formulário
			form.setVisibleById("adicionacotacao", false);
			form.setVisibleById("selecionacotacao", false);
			form.setVisibleById("areaAprovacao", false);
			form.setVisibleById("protheus", false);
			form.setVisibleById("recusa", false);
			form.setVisibleById("nfeparcial", false);
			form.setVisibleById("vencimento1", false);
			form.setVisibleById("vencimento2", false);
			form.setVisibleById("vencimento3", false);
			form.setVisibleById("painel-revisar",false);
			form.setVisibleById("painel-aprovar",false);
			form.setVisibleById("painel-cotar",false);
			form.setVisibleById("painel-parcial",false);
			form.setVisibleById("painel-revisar2",false);
			form.setVisibleById("painel-aprovarDivergencia",false);
			form.setVisibleById("cotacao1",false);
			form.setVisibleById("cotacao2",false);
			form.setVisibleById("cotacao3",false);
			form.setVisibleById("cotacao4",false);
			form.setVisibleById("ulcotacao",false);
			customHTML.append("$('#painel-iniciar').addClass('panel-info').removeClass('panel-primary');");
			
			for (var i=1; i<=cont;i++ ){
				customHTML.append("$('"+classeFormPg(form,i)+"').show();");
			}
		break;
		case APROVARSOLICITACAO :
			form.setHideDeleteButton(true);
			customHTML.append('$("#EXCLUIR").toggle();');
			//apagar lixeira
			form.setVisibleById("retorno", true);
			//button customizado para deixa apagado no pai e filho
			form.setVisibleById('ADICIONARITEM', false);
			form.setVisibleById("adicionacotacao", false);
			form.setVisibleById("selecionacotacao", false);
			form.setVisibleById("areaAprovacao", false);
			form.setVisibleById("protheus", false);
			form.setVisibleById("nfeparcial", false);
			form.setVisibleById("vencimento1", false);
			form.setVisibleById("vencimento2", false);
			form.setVisibleById("vencimento3", false);
			form.setVisibleById("painel-revisar",false);
			form.setVisibleById("painel-cotar",false);
			form.setVisibleById("painel-parcial",false);
			form.setVisibleById("painel-revisar2",false);
			form.setVisibleById("painel-aprovarDivergencia",false);
			form.setVisibleById("cotacao1",false);
			form.setVisibleById("cotacao2",false);
			form.setVisibleById("cotacao3",false);
			form.setVisibleById("cotacao4",false);
			form.setVisibleById("ulcotacao",false);
			customHTML.append("$('.fluigicon-trash').each(function(){$(this).hide();});");
			customHTML.append("$('#painel-aprovar').addClass('panel-info').removeClass('panel-primary');");
			
			for (var i=1; i<=cont;i++ ){
				customHTML.append("$('"+classeFormPg(form,i)+"').show();");
			}
			break;
		
		case RESOLVERPROBLEMA :
			form.setVisibleById("painel-aprovar",false);
			form.setVisibleById("painel-revisar",false);
			form.setVisibleById("painel-cotar",false);
			form.setVisibleById("painel-parcial",false);
			form.setVisibleById("painel-revisar2",false);
		break;
		
		case SERVICO :
			
		break;
		
		case COTACAO :
			form.setHideDeleteButton(true);
			//customHTML.append('$("#tcotacao4 tbody tr").css("cursor","url(/style-guide/images/illustrations/trash.svg),auto");');
			//customHTML.append('$("#tcotacao4 tbody tr td div input").css("cursor","url(/style-guide/images/illustrations/trash.svg),auto");');
			//customHTML.append('$("#tcotacao4 tbody tr td div label").css("cursor","url(/style-guide/images/illustrations/trash.svg),auto");');
			//customHTML.append('$("#tcotacao4 tbody tr td div .col-md-12").css("cursor","default");');
			//customHTML.append('$("#tcotacao4 tbody tr td div .col-md-3").click(function(){if( $("#preco4___"+$(this).closest("tr")[0].id.replace("trcotacao___","")).val()==0.000000 ){$(this).closest("tr").remove();}}); ');
			form.setValue("id_protheus_cotacao",fluigAPI.getUserService().getCurrent().getExtraData("IDPROTHEUS"));
			form.setValue("codUserCotacao",getValue("WKUser"));
			form.setVisibleById("ADICIONARITEM", false);
			form.setVisibleById("adicionacotacao", true);
			form.setVisibleById("selecionacotacao", false);
			form.setVisibleById("areaAprovacao", false);
			//form.setVisibleById("EXCLUIR", false);
			form.setVisibleById('ADICIONARITEM', false);
			form.setVisibleById("nfeparcial", false);
			form.setVisibleById("painel-aprovar",false);
			form.setVisibleById("painel-cotar",false);
			form.setVisibleById("painel-parcial",false);
			form.setVisibleById("painel-revisar2",false);
			form.setVisibleById("painel-aprovarDivergencia",false);
			form.setVisibleById("vencimento1", false);
			form.setVisibleById("vencimento2", false);
			form.setVisibleById("vencimento3", false);
			form.setVisibleById("_pedido_protheus",false);
			form.setVisibleById("_nfprotheus",false);
			customHTML.append("$('#painel-revisar').addClass('panel-info').removeClass('panel-primary');");
			customHTML.append("$('#tab-attachments').hide();");
			
			for (var i=1; i<=cont;i++ ){
				customHTML.append("$('"+classeFormPg(form,i)+"').show();");
			}
		break;
		
		case APROVARCOTACAO :
			form.setVisibleById('ADICIONARITEM', false);
			//apagar lixeira pai e filho
			//form.setHideDeleteButton(true);
			//customHTML.append('$("#pedidos tbody tr").next().find("i").hide();'); 
			//customHTML.append('$("#tcotacao1 tbody tr").next().find("i").hide();'); 
			//customHTML.append('$("#tcotacao2 tbody tr").next().find("i").hide();'); 
			//customHTML.append('$("#tcotacao3 tbody tr").next().find("i").hide();'); 
			
			//form.setVisibleById('EXCLUIR', false);	
			form.setVisibleById("nfeparcial", false);
			form.setVisibleById("_pedido_protheus",false);
			form.setVisibleById("_nfprotheus",false);
			form.setVisibleById("adicionacotacao", false);
			form.setVisibleById("painel-aprovar",false);
			form.setVisibleById("painel-revisar",false);
			form.setVisibleById("painel-parcial",false);
			form.setVisibleById("painel-aprovarDivergencia",false);
			form.setVisibleById("vencimento1", false);
			form.setVisibleById("vencimento2", false);
			form.setVisibleById("vencimento3", false);
			form.setVisibleById("painel-revisar2",false);
			customHTML.append("$('#painel-cotar').addClass('panel-info').removeClass('panel-primary');");
			customHTML.append("$('.fluigicon-trash').each(function(){$(this).hide();});");
			customHTML.append("$(\"#f1\").val( $(\"[name*='escolhido1___']:checked\").length );");
			customHTML.append("$(\"#f2\").val( $(\"[name*='escolhido2___']:checked\").length );");
			customHTML.append("$(\"#f3\").val( $(\"[name*='escolhido3___']:checked\").length );");
			customHTML.append("if($('#CNOME1').val()==''){$('#cotacao1').hide();}");
			customHTML.append("if($('#CNOME2').val()==''){$('#cotacao2').hide();}");
			customHTML.append("if($('#CNOME3').val()==''){$('#cotacao3').hide();}");
			customHTML.append("marcarPrecoMax();");
			 
			for (var i=1; i<=cont;i++ ){
				customHTML.append("$('"+classeFormPg(form,i)+"').show();");
			}
		break;
		
		case AUDITARCOTACAO :
			form.setVisibleById('ADICIONARITEM', false);
			form.setVisibleById("_pedido_protheus",false);
			form.setVisibleById("_nfprotheus",false);
			form.setVisibleById("nfeparcial", false);
			form.setVisibleById("adicionacotacao", false);
			form.setVisibleById("painel-aprovar",false);
			form.setVisibleById("painel-revisar",false);
			form.setVisibleById("painel-cotar",false);
			form.setVisibleById("painel-parcial",false);
			form.setVisibleById("painel-revisar2",false);
			form.setVisibleById("painel-aprovarDivergencia",false);
			form.setVisibleById("vencimento1", false);
			form.setVisibleById("vencimento2", false);
			form.setVisibleById("vencimento3", false);
			customHTML.append("$('.fluigicon-trash').each(function(){$(this).hide();});");
			customHTML.append("if($('#CNOME1').val()==''){$('#cotacao1').hide();}");
			customHTML.append("if($('#CNOME2').val()==''){$('#cotacao2').hide();}");
			customHTML.append("if($('#CNOME3').val()==''){$('#cotacao3').hide();}");
		
		break; 
		
		case PEDIDOCOMPRAS :
			form.setVisibleById('ADICIONARITEM', false);
			form.setVisibleById("nfeparcial", false);
			form.setVisibleById("adicionacotacao", false);
			form.setVisibleById("painel-aprovar",false);
			form.setVisibleById("painel-revisar",false);
			form.setVisibleById("painel-cotar",false);
			form.setVisibleById("painel-parcial",false);
			form.setVisibleById("painel-aprovarDivergencia",false);
			form.setVisibleById("vencimento1", false);
			form.setVisibleById("vencimento2", false);
			form.setVisibleById("vencimento3", false);
			customHTML.append("$('#painel-revisar2').addClass('panel-info').removeClass('panel-primary');");
			customHTML.append("$('.fluigicon-trash').each(function(){$(this).hide();});");
		break;
		
		case ANEXANFE :
			form.setVisibleById('ADICIONARITEM', false);
			form.setVisibleById("adicionacotacao", false);
			form.setVisibleById("selecionacotacao", false);
			form.setVisibleById("painel-aprovar",false);
			form.setVisibleById("painel-revisar",false);
			form.setVisibleById("painel-cotar",false);
			form.setVisibleById("painel-revisar2",false);
			form.setVisibleById("painel-parcial",false);
			form.setVisibleById("painel-aprovarDivergencia",false);
			customHTML.append("$('.fluigicon-trash').each(function(){$(this).hide();});");
			if(form.getValue("f1")==0){
				form.setVisibleById("vencimento1",false);
			}
			
			if(form.getValue("f2")==0){
				form.setVisibleById("vencimento2",false);
			}
			
			if(form.getValue("f3")==0){
				form.setVisibleById("vencimento3",false);
			}
		break;
		
		case FISCAL :
			form.setVisibleById('ADICIONARITEM', false);
			form.setVisibleById("nfeparcial", false);
			form.setVisibleById("adicionacotacao", false);
			form.setVisibleById("painel-aprovar",false);
			form.setVisibleById("painel-revisar",false);
			form.setVisibleById("painel-cotar",false);
			form.setVisibleById("painel-revisar2",false);
			form.setVisibleById("painel-aprovarDivergencia",false);
			//form.setVisibleById("painel-parcial",false);
			customHTML.append("$('.fluigicon-trash').each(function(){$(this).hide();});");
			
			for (var i=1; i<=cont;i++ ){
				customHTML.append("$('"+classeFormPg(form,i)+"').show();");
			}
		break;
		
		case PARCIAL:
			form.setVisibleById("painel-revisar",false);
			form.setVisibleById("painel-aprovar",false);
			form.setVisibleById("painel-cotar",false);
			form.setVisibleById("painel-revisar2",false);
			form.setVisibleById("painel-aprovarDivergencia",false);
			customHTML.append("$('#painel-parcial').addClass('panel-info').removeClass('panel-primary');");
			customHTML.append("$('.fluigicon-trash').each(function(){$(this).hide();});");
		break;
		
		case B1:
			if(true){
				
			}
		break;
		case DIVERGENCIAPRECOMAX:
			form.setVisibleById('ADICIONARITEM', false);
			form.setVisibleById("adicionacotacao", false);
			form.setVisibleById("selecionacotacao", false);
			form.setVisibleById("painel-aprovar",false);
			form.setVisibleById("painel-revisar",false);
			form.setVisibleById("painel-cotar",false);
			form.setVisibleById("painel-revisar2",false);
			form.setVisibleById("painel-parcial",false);
			customHTML.append("$('#painel-aprovarDivergencia').addClass('panel-info').removeClass('panel-primary');");
			customHTML.append("$('.fluigicon-trash').each(function(){$(this).hide();});");
			customHTML.append("marcarPrecoMax();");
			
			break;
		case PROTOCOLORECEBIMENTO:
			form.setVisibleById('ADICIONARITEM', false);
			form.setVisibleById('ADICIONARITEM', false);
			form.setVisibleById("nfeparcial", false);
			form.setVisibleById("adicionacotacao", false);
			form.setVisibleById("painel-aprovar",false);
			form.setVisibleById("painel-revisar",false);
			form.setVisibleById("painel-cotar",false);
			form.setVisibleById("painel-revisar2",false);
			form.setVisibleById("painel-aprovarDivergencia",false);
			form.setVisibleById("painel-parcial",false);
		
			for (var i=1; i<=cont;i++ ){
				customHTML.append("$('"+classeFormPg(form,i)+"').show();");
			}
			break;
			
		case LIBERAPC1:
			for (var i=1; i<=cont;i++ ){
				customHTML.append("$('"+classeFormPg(form,i)+"').show();");
			}
			break;
			
			
		case LIBERAPC2:
			
			for (var i=1; i<=cont;i++ ){
				customHTML.append("$('"+classeFormPg(form,i)+"').show();");
			}
			
			break;
		case LIBERAPC3:
			
			for (var i=1; i<=cont;i++ ){
				customHTML.append("$('"+classeFormPg(form,i)+"').show();");
			}
			break;
	}
	//PEDIDOCOMPRAS
	customHTML.append('</script>');
}
//Responsável por mostrar os campos adicionais conforme opção escolhida
function classeFormPg(form,i){
	
		if(form.getValue("forma_pg"+i)=="CARTÃO DE CREDITO"){
			return ".cartao"+i;
		}
		if(form.getValue("forma_pg"+i)=="TRANSFERÊNCIA BANCÁRIA"){
			
			return ".banco"+i;
		}
		if(form.getValue("forma_pg"+i)=="PIX"){
			return ".pix"+i;
			
		}
	
	return"";
}
function dataAtual() {
	var data = new Date();
	var dia = data.getDate();
	var mes = data.getMonth() + 1;
	var ano = data.getFullYear();
	dia = (dia <= 9 ? "0" + dia : dia);
	mes = (mes <= 9 ? "0" + mes : mes);
	var newData = ano + '-' + mes + '-' + dia;
	return newData;
}