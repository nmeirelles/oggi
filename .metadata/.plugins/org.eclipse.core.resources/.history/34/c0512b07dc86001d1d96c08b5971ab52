function servicetask517(attempt, message) {
	
	try {
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
	} catch (e) {
		// TODO: handle exception
		throw e;
	}
	
	return true;
	
}