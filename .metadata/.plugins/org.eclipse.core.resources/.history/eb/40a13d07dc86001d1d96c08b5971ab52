function beforeCancelProcess(colleagueId,processId){
	if(String(hAPI.getCardValue('NUM_RETORNO'))){
	
	log.info(">>>>>>>>>>>>>>>>> Estorno <<<<<<<<<<<<<<<<<");
	var clientService = fluigAPI.getAuthorizeClientService();
	
	try{
		var clientService = fluigAPI.getAuthorizeClientService();
		var data = {
				companyId : '0'+getValue("WKCompany") + '',
				serviceCode : 'Protheus',
				endpoint : '/rest/FLGCOM00/PedidodeCompras/'+String( hAPI.getCardValue('NUM_RETORNO'))+'',
				method : 'delete',
				timeoutService: '100',
//			params : {
//				"NUMSOL" : String( hAPI.getCardValue('NUM_RETORNO') )
//			},
			headers: {
				'tenantid': String(hAPI.getCardValue('COD_EMPRESA') + ',' + hAPI.getCardValue('COD_FILIAL'))
			}
		}
		
		log.warn( "##### Estorno - JSON: " + JSON.stringify(data) );
		
		var vo = clientService.invoke( JSON.stringify(data) );
		log.warn("##### Estorno - RESULTADO  vo : " + vo);
		
		if(vo.getResult()== null || vo.getResult().isEmpty()){
			throw "Retorno está vazio";
		}else{
			log.info(vo.getResult());
		}
		var retorno = JSON.parse(vo.getResult());
	
		if(parseInt(retorno.errorCode) < 200 || parseInt(retorno.errorCode) > 299){
			//hAPI.setCardValue('grupoerro',);
			throw vo.getResult() + " " + JSON.stringify(data);
		}
	}catch(err) {
		throw err;
		}
		return true;
	}
	}