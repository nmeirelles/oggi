function servicetask505(attempt, message) {

	
	try {
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
	} catch (e) {
		// TODO: handle exception
		throw e;
	}
	
	return true;
	

}