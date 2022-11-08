function afterStateEntry(sequenceId){
	var INICIO = 4;
	var APROVARSOLICITACAO=5;
	var RESOLVERPROBLEMA=106;
	var SERVICO=86;
	var COTACAO=8;
	var APROVARCOTACAO=17;
	var PEDIDOCOMPRAS=29;
	var ANEXANFE=75;
	var FISCAL=79;
	var PARCIAL=240;
	var AUDITARCOTACAO=252;
	var FIM=156;
	var CANCELADA=155;
	var B1=359;
	var B2=361;
	var B3=362;
	var atividade = getValue("WKCurrentState");
	log.info("sequenceId " + sequenceId);
	
	switch(sequenceId){
		case B1:
			var indexes = hAPI.getChildrenIndexes("cotacao4");
			for (var i = 0; i < indexes.length; i++) {
				if(hAPI.getCardValue("fornecedor4___" + indexes[i]) == hAPI.getCardValue("CNOME1") ){
					hAPI.setCardValue("status4___" + indexes[i],"Aguardando saldo...");
				}
			}
		break;
		
		case B2:
			for (var i = 0; i < indexes.length; i++) {
				if(hAPI.getCardValue("fornecedor4___" + indexes[i]) == hAPI.getCardValue("CNOME2") ){
					hAPI.setCardValue("status4___" + indexes[i],"Aguardando saldo...");
				}
			}
		break;
		
		case B3:
			for (var i = 0; i < indexes.length; i++) {
				if(hAPI.getCardValue("fornecedor4___" + indexes[i]) == hAPI.getCardValue("CNOME3") ){
					hAPI.setCardValue("status4___" + indexes[i],"Aguardando saldo...");
				}
			}
		break;
		
		case APROVARCOTACAO:
			var idxs = hAPI.getChildrenIndexes("pedidos");
			var childrenData = hAPI.getChildrenFromTable("pedidos");
		    var max = false;
		    var vlrmax  =0;
		    var UPreco = 0;
		    throw idxs
		    for (var i = 0; i < idxs.length; i++) {
		         UPreco = parseFloat( form.getValue("UPreco___" + idxs[i]) );
		         vlrmax = parseFloat( form.getValue("vlrmax___" + idxs[i]) );
		         throw UPreco+" "+vlrmax +" "+UPreco>vlrmax
		         if(UPreco>vlrmax){
		        	hAPI.setCardValue("achouMaxVl","true");
		        	hAPI.setCardValue("linhaMaxVl","|"+idxs[i])
		        }
		    }
		    
		    var achouMaxVl =form.getValue(achouMaxVl);

		    if(achouMaxVl=="true"){
		        var msgMaxVl = parseInt(hAPI.getCardValue("msgMaxVl"))
			
		        if(msgMaxVl<1){
		            hAPI.setCardValue("msgMaxVl",msgMaxVl+1);
		 		   var linhas =hAPI.getCardValue("linhaMaxVl")
		        	throw "Valor máximo foi ultrapassado linha(s) "+linhas+", caso deseje aprovar o mesmo será encamihado para Diretoria."
					
		        }
		    
		    }
		    
		    
			break;
	}
}
