function beforeTaskSave(colleagueId,nextSequenceId,userList){
	var atv = parseInt(getValue("WKNumState"));
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
	var BLOQUEIO1=440;
	var BLOQUEIO2=446;
	var BLOQUEIO3=447;
	var LIBERARPC1=474;
	var LIBERARPC2=475;
	var LIBERARPC3=476;
	var PRESENCACARGAABAX =434;
	var TI1=299;
	var TI2=304;
	var TI3=309;
	var cont =0;
	var DoublecheckSC=417;
	var solicitante =198;
	switch(atv){
	
	case APROVARSOLICITACAO:
	
	    
	   
	    
		break;
		case TI1 :
			if(nextSequenceId!=BLOQUEIO1){
				var retorno = ValidatePedidoCompras("1");
				if(retorno=="L"||retorno=="B"||retorno=="X"){
					throw "Pedido " + hAPI.getCardValue("ppf1") + "existe no protheus e <span style='color:red;font-size=20px;'>NÃO</span> deve ser reintegrado";
				}else{
					return true;
				}
				
			}
		break;
		
		case TI2 :
			if(nextSequenceId!=BLOQUEIO2){
				var retorno = ValidatePedidoCompras("2");
				if(retorno=="L"||retorno=="B"||retorno=="X"){
					throw "Pedido " + hAPI.getCardValue("ppf2") + "existe no protheus e <span style='color:red;font-size=20px;'>NÃO</span> deve ser reintegrado";
				}else{
					return true;
				}
			}
		break;
		
		case TI3 :
			if(nextSequenceId!=BLOQUEIO3){
				var retorno = ValidatePedidoCompras("3");
				if(retorno=="L"||retorno=="B"||retorno=="X"){
					throw "Pedido " + hAPI.getCardValue("ppf3") + "existe no protheus e <span style='color:red;font-size=20px;'>NÃO</span> deve ser reintegrado";
				}else{
					return true;
				}
			}
		break;

		case LIBERARPC1 :
			var retorno = ValidatePedidoCompras("1")
			
			if(retorno=="L"){
				return true;
			}else{
				
				throw "Pedido " + hAPI.getCardValue("ppf1") + "não liberado no protheus";
			}
		break;

		case LIBERARPC2 :
			var retorno = ValidatePedidoCompras("2")
			if(retorno=="L"){
				return true;
			}else{
				throw "Pedido " + hAPI.getCardValue("ppf2") + "não liberado no protheus";
			}
			
		break;
		
		case LIBERARPC3 :
			var retorno = ValidatePedidoCompras("3")
			if(retorno=="L"){
				return true;
			}else{
				throw "Pedido " + hAPI.getCardValue("ppf3") + "não liberado no protheus";
			}
		break;
		
		case APROVARCOTACAO:
	
		/*	var idxs = hAPI.getChildrenIndexes("pedidos");
			var childrenData = hAPI.getChildrenFromTable("pedidos");
		    var vlrmax  =0;
		    var UPreco = 0;
		    var linhaMaxVl="";
		    for (var i = 0; i < idxs.length; i++) {
		         UPreco = parseFloat( hAPI.getCardValue("UPreco___" + idxs[i]) );
		         vlrmax = parseFloat( hAPI.getCardValue("vlrmax___" + idxs[i]) );
		        
		         if(UPreco > vlrmax){
		        	hAPI.setCardValue("achouMaxVl","true");
		        	linhaMaxVl =hAPI.getCardValue("linhaMaxVl")
		        	hAPI.setCardValue("linhaMaxVl",linhaMaxVl+"|"+idxs[i])
		        	
		        }
		    }
			var achouMaxVl =hAPI.getCardValue("achouMaxVl");
			  
		    if(achouMaxVl=="true"){
		        var msgMaxVl = parseInt(hAPI.getCardValue("msgMaxVl"))
		        
		        if(cont<1){
		        	++cont;
		            var linhas =hAPI.getCardValue("linhaMaxVl")
		        	 hAPI.setCardValue("msgMaxVl","1");
		            throw "<strong>Valor máximo foi ultrapassado linha(s) <span style='color:red'>"+linhas+"</span>, caso deseje aprovar o mesmo será encamihado para Diretoria.</strong>"
		            
		        }
		        
		    }
		    */
			
		break;
		
		case PRESENCACARGAABAX  :
                        /*
			var c1 = DatasetFactory.createConstraint("pedido", hAPI.getCardValue("ppf1"), hAPI.getCardValue("ppf1"), ConstraintType.MUST);
			var c2 = DatasetFactory.createConstraint("pedido", hAPI.getCardValue("ppf2"), hAPI.getCardValue("ppf2"), ConstraintType.MUST);
			var c3 = DatasetFactory.createConstraint("pedido", hAPI.getCardValue("ppf3"), hAPI.getCardValue("ppf3"), ConstraintType.MUST);
			var c4 = DatasetFactory.createConstraint("emp", hAPI.getCardValue("empresa_cod2"), hAPI.getCardValue("empresa_cod2"), ConstraintType.MUST);
			var c5 = DatasetFactory.createConstraint("fil", hAPI.getCardValue("filial_cod2"), hAPI.getCardValue("filial_cod2"), ConstraintType.MUST);
			var constraints1 = new Array(c1,c4,c5);
			var constraints2 = new Array(c2,c4,c5);
			var constraints3 = new Array(c3,c4,c5);
			var dataset1 = DatasetFactory.getDataset("presencaCargaAbax", null, constraints1, null);
			var dataset2 = DatasetFactory.getDataset("presencaCargaAbax", null, constraints2, null);
			var dataset3 = DatasetFactory.getDataset("presencaCargaAbax", null, constraints3, null);
			
			if((dataset1.rowsCount ==""||dataset1.rowsCount ==null)  && (dataset2.rowsCount=="" && dataset2.rowsCount==null) && (dataset3.rowsCount ==""  || dataset3.rowsCount ==null)){
				throw "Não foi identificado presença de carga no ABAX!";
			}else if((dataset1.getValue(0,"NOTAS")=="") && (dataset2.getValue(0,"NOTAS")=="") && (dataset3.getValue(0,"NOTAS")=="")){
				throw "Não foi identificado presença de carga no ABAX!";
			}
		        */	
		break;
		case RESOLVERPROBLEMA:
			
			var c1 = DatasetFactory.createConstraint("FLUIG", hAPI.getCardValue("processoid"), hAPI.getCardValue("processoid"), ConstraintType.MUST);
			var c2 = DatasetFactory.createConstraint("EMP", hAPI.getCardValue("empresa_cod2"), hAPI.getCardValue("empresa_cod2"), ConstraintType.MUST);
			
			var constraints = new Array(c1,c2);
			var dataset = DatasetFactory.getDataset("ds_solcompras_existeFluig", null, constraints, null);
			log.info("INFODEV WKNumProces: "+getValue('WKNumProces')+"  C1_NUM  "+dataset.getValue(0, "C1_NUM") );
			if(dataset.getValue(0, "C1_NUM") == "" ||dataset.getValue(0, "C1_NUM") == null){
				//teste
				if(nextSequenceId==DoublecheckSC){
					throw "Solicitação não localizado deve ser reintegrada! "
				}
				
			}else { 
				
				hAPI.setCardValue("solicitacao_protheus",dataset.getValue(0, "C1_NUM"));
				
				if(nextSequenceId==SERVICO || nextSequenceId==solicitante){
				
					throw "Fluig localizado não deve ser reintegrado! <br> Favor envie para double check "
			
				}
				
				return true;
			}
			
			break;
			
		case 526:
			
			
			
			break;
	}
}
