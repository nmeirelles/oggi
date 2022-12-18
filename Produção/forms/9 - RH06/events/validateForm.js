function validateForm(form){
	var ativ = getValue('WKNumState');
	
	if (form.getValue("colaborador") == ""){
		throw "Um ou mais campos obrigatórios não foram preenchidos."; 
	}
	if (form.getValue("departamento") == ""){
		throw "Um ou mais campos obrigatórios não foram preenchidos."; 
	}
	if (form.getValue("cargo_atual") == ""){
		throw "Um ou mais campos obrigatórios não foram preenchidos."; 
	}
	if (form.getValue("cargo_proposto") == ""){
		throw "Um ou mais campos obrigatórios não foram preenchidos."; 
	}
	if (form.getValue("dep_proposto") == ""){
		throw "Um ou mais campos obrigatórios não foram preenchidos."; 
	}
	if (form.getValue("salario_novo") == ""){
		throw "Um ou mais campos obrigatórios não foram preenchidos."; 
	}
		
	if(ativ == 9){
		if (form.getValue("aprovacao1") == "" ){
		    throw "Favor finalizar a Etapa para prosseguir."; 
	  }
	
	}else if(ativ == 13){
		if (form.getValue("aprovacao2") == ""){
		    throw "Favor finalizar a Etapa para prosseguir."; 
	    }
	
	}else if(ativ == 22){
		if (form.getValue("alterar_funcao") == "" || form.getValue("alterar_funcao") == "nao" ){
		    throw "Favor finalizar a Etapa para prosseguir."; 
	    }
	}
}

