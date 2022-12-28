function afterProcessCreate(processId){
	var data = new Date();
	var d = String(data.toISOString()).split("T");
	log.info("processoid: " + processId);
	hAPI.setCardValue("estadosolicitacao", "Inicio");
    hAPI.setCardValue("processoid",processId);
	hAPI.setCardValue("dataentrada",d[0]);
	hAPI.setCardValue("codUser",getValue("WKUser"));
	
}