function servicetask332(attempt, message) {
	if( hAPI.getCardValue("pg_ant1")=="S" && hAPI.getCardValue("f1")>0){
		//A tarefa destino tem o mecanismo de atribuição para um papel, cujo o código é papelUser
		var users = new java.util.ArrayList();
		users.add("Pool:Group:Contas a Pagar");
		var formData = new java.util.HashMap();
		formData.put("pedido", hAPI.getCardValue("ppf1"));
		formData.put("empresa", hAPI.getCardValue("empresa_cod2"));
		formData.put("fornecedor", hAPI.getCardValue("CCOD1"));
		formData.put("nome", hAPI.getCardValue("CNOME1"));
		//formData.put("titulo", hAPI.getCardValue(""));
		formData.put("valor", hAPI.getCardValue("valortotalcomfrete1"));
		formData.put("dataVenc", hAPI.getCardValue("vencimento1"));
		formData.put("titulo","Fluig" + getValue("WKNumProces"));
		var resp = hAPI.startProcess("FIN07", 5, users, "Solicitação inicializada pelo processo: "+getValue("WKNumProces"), true, formData, false);
	}
	if( hAPI.getCardValue("pg_ant2")=="S" && hAPI.getCardValue("f2")>0 ){
		//A tarefa destino tem o mecanismo de atribuição para um papel, cujo o código é papelUser
		var users2 = new java.util.ArrayList();
		users2.add("Pool:Group:Contas a Pagar");
		var formData2 = new java.util.HashMap();
		formData2.put("pedido", "ppf2");
		formData2.put("empresa", "empresa_cod2");
		formData2.put("fornecedor", "CCOD2");
		formData2.put("nome", "CNOME2");
		//formData2.put("titulo", "");
		formData2.put("valor", "valortotalcomfrete2");
		formData2.put("dataVenc", "vencimento2");
		formData.put("titulo","Fluig" + getValue("WKNumProces"));
		var resp2 = hAPI.startProcess("FIN07", 5, users2, "Solicitação inicializada pelo processo: "+getValue("WKNumProces"), true, formData2, false);
	}
	if( hAPI.getCardValue("pg_ant3")=="S" && hAPI.getCardValue("f3")>0 ){
		//A tarefa destino tem o mecanismo de atribuição para um papel, cujo o código é papelUser
		var users3 = new java.util.ArrayList();
		users3.add("Pool:Group:Contas a Pagar");
		var formData3 = new java.util.HashMap();
		formData3.put("pedido", "ppf3");
		formData3.put("empresa", "empresa_cod2");
		formData3.put("fornecedor", "CCOD3");
		formData3.put("nome", "CNOME3");
		//formData3.put("titulo", "");
		formData3.put("valor", "valortotalcomfrete3");
		formData3.put("dataVenc", "vencimento3");
		formData.put("titulo","Fluig" + getValue("WKNumProces"));
		var resp3 = hAPI.startProcess("FIN07", 5, users3, "Solicitação inicializada pelo processo: "+getValue("WKNumProces"), true, formData3, false);
	}
	
}