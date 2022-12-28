function servicetask34(attempt, message) {
	try{
		logTexto('**************** INTEGRAÇÃO CADASTRO DE COMPRAS **************** ')
		var clientService = fluigAPI.getAuthorizeClientService();
		var aItens = new Array();
		var indexes = hAPI.getChildrenIndexes("tb_produtos");
		logTexto('indexes:  '+indexes.length);
		for(var i = 0; i < indexes.length; i++){
			logTexto('Dentro do FOR  ')
			var indice = indexes[i];
			var item = {};
			item["C7_PRODUTO"] = hAPI.getCardValue("C7_PRODUTO___" + indice).trim()+ "";
			logTexto('C7_PRODUTO___ '+hAPI.getCardValue("C7_PRODUTO___" + indice).trim());
			item["C7_QUANT"] = hAPI.getCardValue("C7_QUANT___" + indice).trim()+ "";
			logTexto('C7_QUANT___ '+hAPI.getCardValue("C7_QUANT___" + indice).trim());
			item["C7_PRECO"] = hAPI.getCardValue("C7_TOTAL___" + indice).trim()+ "";
			logTexto('TX_VALUNI___ '+hAPI.getCardValue("TX_VALUNI___" + indice).trim());
			item["C7_TOTAL"] = hAPI.getCardValue("C7_TOTAL___" + indice).trim()+ "";
			logTexto('C7_TOTAL___ '+hAPI.getCardValue("C7_TOTAL___" + indice).trim());
			item["C7_XNFLUIG"] = getValue("WKNumProces")+ "";
			logTexto('C7_XNFLUIG '+getValue("WKNumProces"));
			item["C7_CONTA"] = hAPI.getCardValue("C7_CONTA___" + indice).trim()+ "";
			item["C7_CODINAT"] = hAPI.getCardValue("COD_NATU___" + indice).trim()+ "";
			item["C7_CC"] = hAPI.getCardValue("cod_CC").trim()+ "";
			item["C7_NUMSC"] = '';
			aItens.push(item);
		}
		logTexto('Depois do FOR  ');
		var data = {
			companyId : '01',
			serviceCode : 'Protheus',
			endpoint : '/rest/FLGCOM00/PEDIDODECOMPRAS',
			method : 'post',
			timeoutService: '100', 
			params : {
				"C7_FORNECE":hAPI.getCardValue("C7_FORNECE").trim() + "",
				"C7_LOJA":hAPI.getCardValue("C7_LOJA").trim() + "",
				"C7_COND":hAPI.getCardValue("COD_COND").trim() + "",
				"C7_CONTATO":"",
				"C7_USER": "000802",
				"C7_XDTORC":"",
				"ITENS":	aItens
			},
			headers: {
				'tenantid': String(hAPI.getCardValue('empresa_cod2') + ',' + hAPI.getCardValue('filial_cod2')) 
			}
		}
		logTexto('-- DATA -- *-*-*-*-*-*-*-*');
		log.dir(data);
		logTexto('-- DATA --');
		logTexto(">>>>>>>>>>>>>>>>>Linha3");
		var retornoApi = clientService.invoke(JSON.stringify(data));
		log.dir(retornoApi);
		logTexto(">>>>>>>>>>>>>>>>>Linha4");
		var statusHttp = retornoApi.getHttpStatusResult();
		logTexto(">>>>>>>>>>>>>>>>>Linha5");
		logTexto(retornoApi.getResult());
		var idIntegracao = retornoApi.getResult();
		idIntegracao = JSON.parse(idIntegracao).C7_NUM;
		
		var constraint = [] 
		constraint.push(DatasetFactory.createConstraint('CODE',statusHttp,statusHttp, ConstraintType.MUST));
	    var dts_httpStatus = DatasetFactory.getDataset('dts_httpStatus', null,constraint, null);
		

		if(statusHttp == 400){
			throw java.lang.Exception("Incorrect Request");
		}else if(statusHttp == 401){
			throw java.lang.Exception("User is not authenticated");
		}else if(statusHttp == 403){
			throw java.lang.Exception("User does not have permission to perform the operation");
		}else if(statusHttp == 404){
			throw java.lang.Exception("Resource not found");
		}else if(statusHttp == 412){
			throw java.lang.Exception("Failed to move due to the need of an assignee to be appointed for the next task");
		}else if(statusHttp == 500){
			throw java.lang.Exception("Internal server error, see reply for more details");
		}
		hAPI.setCardValue("NUM_RETORNO",idIntegracao);
		hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, "Integração realizada com sucesso. Emp: " + hAPI.getCardValue('empresa_cod2') + " Fil: " + hAPI.getCardValue('filial_cod2') + " Número de Pedido: " +idIntegracao);
	} catch(err) {
		hAPI.setCardValue("msg", "Erro!");
		throw err + JSON.stringify(data);
	}
}


//=================================================================================================
/*/
@DESCRICAO: Funções uteis para maninupalão de valores
	@AUTHOR: Pedro Costa
	@DATA: 2020-02-12
/*/
function convertStringToNumber(value){
	log.info("Iniciando convertStringToNumber() >>> " + value);
	try{
		value = new String(value);
		value = value.replace(/[^0-9.,]/g, "");
		var result = quantityOfTimes(value, ",");
		log.info("Finalizando convertStringToNumber() >>> Result: " + result);
		if(result > 0){
			result = quantityOfTimes(value, ".");
			if(result > 0){
				value = value.replace(/\./g, "");
			}
			value = value.replace(/\,/g, ".");
		}
		log.info("Finalizando convertStringToNumber() >>> Antes parseFloat: " + value);
		value = parseFloat(value);
		log.info("Finalizando convertStringToNumber() >>> Depois parseFloat: " + value);
		log.info("Finalizando convertStringToNumber() >>> " + value);
		return value;
	}catch (e) {
		throw e;
	}
}

function quantityOfTimes(value, search){
	search = new String(search);
	var value = value;
	var controller = true;
	var quantity = 0;
	var result = 0;
	var valueLength = value.length;
	var searchLength = search.length;
	while (controller) {
		result = value.indexOf(search);
		if(result > -1){
			value = value.substring((result + searchLength), valueLength);
			quantity++;
		}else{
			controller = false;
		}
	}
	return quantity;
}

function numberToCurrencyBR(value){
	log.info("Iniciando numberToCurrencyBR() >>> 1: " + value);
	value = convertStringToNumber(value);
	log.info("Iniciando numberToCurrencyBR() >>> 2: " + value);
	value = new String(value.toFixed(2));
	log.info("Iniciando numberToCurrencyBR() >>> 3: " + value);
	var pointIndex = value.indexOf(".");
	pointIndex = (pointIndex > -1 ? pointIndex : value.length);
	var numberInt = value.substr(0, pointIndex);
	var numberDec = value.substr(pointIndex + 1, value.length);
	var initial = (numberInt.length % 3);
	var treatment = numberInt.substr(initial, numberInt.length);
	var result = numberInt.substr(0, initial);
	result += result != "" ? "." : "";
	for(var x = 0; x < treatment.length; x++){
		if(x != 0 && ((x % 3) == 0)){
			result += ".";
		}
		result += treatment[x];
	}
	log.info("Iniciando numberToCurrencyBR() >>> 4: " + ("R$ " + result + "," + numberDec));
	return "R$ " + result + "," + numberDec;
}

function logTexto( mensagem ){
	mensagem = new String( mensagem );
	mensagem = "-=||=-=||=-=|| (Processo Solicitacao Reembolso) >>> " + mensagem;
	
	if( true ){
		log.info( mensagem );
	}
	
	return mensagem;
}