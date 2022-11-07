function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    var DBK_USER = "000829";
    //var emp = "02";
    //var fil = "01";
    //criar constraints
	if (constraints != null) {
	    for (var i = 0; i < constraints.length; i++) {
	    	if (constraints[i].fieldName == "B1_EMP") {
	    		emp = String( constraints[i].initialValue );
	    	}
	    	if (constraints[i].fieldName == "B1_FILIAL") {
	    		fil = String( constraints[i].initialValue );
	    	}
	    	if (constraints[i].fieldName == "DBK_USER") {
	    		DBK_USER = String( constraints[i].initialValue );
	    	}
	    }
	}
    dataset.addColumn('Codigo');
    dataset.addColumn('Descricao');
       
    try {
        var clientService = fluigAPI.getAuthorizeClientService();

        var data = {
            companyId : '0'+getValue("WKCompany") + '',
            serviceCode : 'Protheus',
            endpoint: '/rest/OGGICC?CUSUARIO=' + String(DBK_USER),
            method: 'get',
            timeoutService: '100',
            headers: {
				'tenantid': String(emp + ',' + fil) 
			}
        }
        log.info("===Dataset Centro de Custo ===")
        var vo = clientService.invoke(JSON.stringify(data));
        
        if (vo.getResult() == null || vo.getResult().isEmpty()) {
            throw new java.lang.Exception("Retorno está vazio");
        } else {

            var json = JSON.parse(vo.getResult());
            var stringify = JSON.stringify(json);
            var resultado = JSON.parse(stringify);

            for (var i = 0; i < resultado.length; i++) {
            	dataset.addRow([json[i].CCOD, json[i].CDESC]);     
            } 

            return dataset;

        }

    } catch (error) {    	
        dataset.addRow(['erro', error.message]);
        log.info("BANCOS DATASET "+vo.getResult());
    } 
    
}