function createDataset(fields, constraints, sortFields) {
	log.info('>>>>>>>> START_ADMISSAO <<<<<<<<<<<')
	var dataset	= DatasetBuilder.newDataset();
	dataset.addColumn("ID_PROCESSO");
	dataset.addColumn("NUM_PROCESSO");
	dataset.addColumn("ID_DOCUMENTO");
	var idProcess;
	var departmentTI;
	var equipSeguranca;
	var equipsTI;
	var userEspelho;
	var nomeAprovado;
	var emailAprovado;
	var contatoAprovado;
	
	log.info('>>>>>>>> ANTES DA constraints <<<<<<<<<<<')
	if (constraints != null && constraints.length) {
		for (var c = 0; c < constraints.length; c++) {
			//cConst = cConst + constraints[c].fieldName.toUpperCase();
			if (constraints[c].fieldName.toUpperCase() != "SQLLIMIT") {
				if (constraints[c].fieldName == "IDPROCESS"){
					idProcess = constraints[c].initialValue.trim()
					log.info('idProcess: '+idProcess)
				}if (constraints[c].fieldName == "DEPARTMENTTI"){
					departmentTI = constraints[c].initialValue.trim()
					log.info('departmentTI: '+departmentTI)
				}if (constraints[c].fieldName == "EQUIPSEGURANCA"){
					equipSeguranca = constraints[c].initialValue.trim()
					log.info('equipSeguranca: '+equipSeguranca)
				}if (constraints[c].fieldName == "EQUIPSTI"){
					equipsTI = constraints[c].initialValue.trim()
					log.info('equipsTI: '+equipsTI)
				}if (constraints[c].fieldName == "USERESPELHO"){
					userEspelho = constraints[c].initialValue.trim()
					log.info('userEspelho: '+userEspelho)
				}if (constraints[c].fieldName == "NOMEAPROVADO"){
					nomeAprovado = constraints[c].initialValue.trim()
					log.info('nomeAprovado: '+nomeAprovado)
				}if (constraints[c].fieldName == "EMAILAPROVADO"){
					emailAprovado = constraints[c].initialValue.trim()
					log.info('emailAprovado: '+emailAprovado)
				}if (constraints[c].fieldName == "CONTATOAPROVADO"){
					contatoAprovado = constraints[c].initialValue.trim()
					log.info('contatoAprovado: '+contatoAprovado)
				}
			}
		}
	}

	try{
		log.info('try')
		var clientService = fluigAPI.getAuthorizeClientService();	
		var data = {
			companyId : getValue("WKCompany") + '',
			serviceCode : 'FLUIG_OGGI_REST',
			endpoint : '/process-management/api/v2/processes/ProcessoAdmissao/start',
			method : 'post',     
			timeoutService: '100', // segundos
			params : {
				"targetState": 0,
				"targetAssignee": "",
				"comment": "Processo admissão aberto pelo processo de recrutamento: "+idProcess,
				"formFields": {
					
				}
			},
			options : {
				encoding : 'UTF-8',
				mediaType: 'application/json',
				useSSL : true
			}
		}
		data.params.formFields["idProcessoPai"] = ""+idProcess
		data.params.formFields["departmentTI"] = ""+departmentTI
		data.params.formFields["equipSeguranca"] = ""+equipSeguranca
		data.params.formFields["equipsTI"] = ""+equipsTI
		data.params.formFields["userEspelho"] = ""+userEspelho
		data.params.formFields["nomeAprovado"] = ""+nomeAprovado
		data.params.formFields["emailAprovado"] = ""+emailAprovado
		data.params.formFields["contatoAprovado"] = ""+contatoAprovado

		log.info('<><><><> dir <><><><><>')
		log.dir(data)
		log.info('<><><><> dir <><><><><>')
		
		var retornoApi = clientService.invoke(JSON.stringify(data));
		var statusHttp = retornoApi.getHttpStatusResult();
			
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
			
		// VERIFICA SE O RETORNO ESTA VAZIO
		if(retornoApi.getResult() == null || retornoApi.getResult().isEmpty())
			throw java.lang.Exception("Ocorreu uma falha no retorno da API!");
		
		retornoApi = JSON.parse(retornoApi.getResult());
		
		if(retornoApi.hasOwnProperty("processInstanceId") && retornoApi.processInstanceId != null){
			var idProcesso  = retornoApi.hasOwnProperty("processId")         ? retornoApi.processId         : "";
			var idDocumento = retornoApi.hasOwnProperty("cardId")            ? retornoApi.cardId            : "";
			var numProcesso = retornoApi.hasOwnProperty("processInstanceId") ? retornoApi.processInstanceId : "";
			
			dataset.addRow([idProcesso, numProcesso, idDocumento]);
		}else{
			throw java.lang.Exception("ProcessId nao encontrado");
		}
	}catch (ex) {
        var mensagem = "Mensagem: " + ex.message;

        var linha = ex.lineNumber;
        if(linha != undefined && linha != null) {
            mensagem += " | Linha: " + linha; 
        }
        dataset.addRow(["","FALHA", mensagem, "",""]);
    }
	
	return dataset;
}