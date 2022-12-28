function servicetask530(attempt, message) {
	
	try {
		var indexes = hAPI.getChildrenIndexes("cotacao2");
		var formData = new java.util.HashMap();
		var codUserCotacao =hAPI.getCardValue("codUserCotacao"); 
		formData.put("id_protheus",hAPI.getCardValue("id_protheus"));
		formData.put("solicitacao_fluig",hAPI.getCardValue("processoid"));
		formData.put("codUser",hAPI.getCardValue("codUser"));
		formData.put("codUserCotacao",codUserCotacao);
		formData.put("id_protheus_cotacao",hAPI.getCardValue("id_protheus_cotacao"));
		formData.put("ID_solicitante",hAPI.getCardValue("ID_solicitante"));
		formData.put("nome_solicitante",hAPI.getCardValue("nome_solicitante"));
		formData.put("email_solicitante",hAPI.getCardValue("email_solicitante"));
		formData.put("empresa_cod",hAPI.getCardValue("empresa_cod2"));
		formData.put("filial_cod",hAPI.getCardValue("filial_cod2"));
		formData.put("filial",hAPI.getCardValue("filial"));
		formData.put("empresa",hAPI.getCardValue("empresa"));
		formData.put("urgente",hAPI.getCardValue("urgente"));
		formData.put("vencimento",hAPI.getCardValue("vencimento"));
		formData.put("solicitacao_protheus",hAPI.getCardValue("solicitacao_protheus"));
		formData.put("nfprotheus",hAPI.getCardValue("nfprotheus"));
		formData.put("pedido_protheus",hAPI.getCardValue("ppf2"));
	    formData.put("pedido1",hAPI.getCardValue("ppf1"));
		formData.put("pedido2",hAPI.getCardValue("ppf2"));
		formData.put("pedido3",hAPI.getCardValue("ppf3"));
		formData.put("fluigPedido1",hAPI.getCardValue("fluigPedido1"));
		formData.put("fluigPedido2",hAPI.getCardValue("fluigPedido2"));
		formData.put("fluigPedido3",hAPI.getCardValue("fluigPedido3"));
		formData.put("CCOD",hAPI.getCardValue("CCOD2"));
		
		
		var users = new java.util.ArrayList();
		log.info("indexes.length "+indexes.length)
		for(var i=1; i<=indexes.length; i++){
			log.info("escolhido");
			var checkbox = hAPI.getCardValue("escolhido2___"+i) == "on" ? true : false;
			log.info("checkbox valor : "+hAPI.getCardValue("escolhido1___"+i))
			log.info("checkbox : "+checkbox);
			if(checkbox){
				log.info("Pedido "+hAPI.getCardValue("codproduto___"+i));
				
				formData.put("descricao___"+i,hAPI.getCardValue("descricao2___"+i));
				formData.put("fornecedor___"+i,hAPI.getCardValue("CNOME3"));
				
			    //formData.put("itemsc___"+i,hAPI.getCardValue("itemsc"+1+"___"+i));
			    formData.put("preco___"+i,hAPI.getCardValue("preco2___"+i));
				formData.put("total___"+i,hAPI.getCardValue("total2___"+i));
				formData.put("ipi___"+i,hAPI.getCardValue("ipi2___"+i));
				
				formData.put("cec___"+i,hAPI.getCardValue("cec2___"+i));
				formData.put("coc___"+i,hAPI.getCardValue("coc2___"+i));
				//formData.put("status___"+i,hAPI.getCardValue("status4___"+i));
			
			}
		
		}
		var users = new java.util.ArrayList();
		users.add(codUserCotacao);
		var fluig =hAPI.getCardValue("fluigPedido2");
		var retorno ="";
		if(fluig=="" || fluig==undefined){
			retorno =hAPI.startProcess("Recebimento",5, users, "Fluxo iniciado pelo processo de Solicitação de Compras", true, formData, false);
			
			
			
			if(retorno.get("iProcess")==undefined || retorno.get("iProcess")==""){
				throw "Error ao tentar gerar fluxo de recebimento "+retorno;
			}else{
				hAPI.setCardValue("fluigPedido2", retorno.get("iProcess")) ;
				return true;
			}
		}
		 
		
		
	} catch (e) {
		// TODO: handle exception
		throw "Erro ao gerar Recebimento Material 2 (linha: " + e.lineNumber + "): mensagem" + e;
	}
	return true;
}