function servicetask512(attempt, message) {
	
	try {
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
	} catch (e) {
		// TODO: handle exception
		throw e;
	}
	
	return true;
	
}