function validateForm(form){
	
	var atividade = getValue("WKNumState");
	var nextAtividade = getValue("WKNextState");
	
	
	if(atividade != nextAtividade){
		var indexes = form.getChildrenIndexes("tb_produtos");
		var mensagens = "";
		
		var inputsHeader = [
	    {
	      id:"C7_COND",
	      label:'Condição de pagamento',
	    },{
	      id:"TX_BANCO",
	      label:'Banco',
	    },{
	      id:"TX_CONTA",
	      label:'Conta',
	    },{
	      id:"TX_DIGITO",
	      label:'Digito',
	    }]
	
	    
	    var inputSolicitante = form.getValue("showSolicitante");
	    var inputFilial = form.getValue("isFilial");
				
	    if(inputSolicitante == 'true') inputsHeader.push({id:"TX_SOLICITANTE",label:'Nome Solicitante'})
	    if(inputFilial == 'true') inputsHeader.push({id:"C7_FILIAL",label:'Filial'})
	
		  if (indexes.length <= 0) throw 'Adicionar despesas'
	
		for(var i = 0; i < inputsHeader.length; i++){
			if (!validValue(form.getValue(inputsHeader[i].id))){
				mensagens += inputsHeader[i].label+' '+ "\n"
			}
		}
		
		for(var index = 0; index < indexes.length; index++){
	
			var dtLancamento = form.getValue("DT_LANCAMENTO___" + indexes[index]);
			
	    if (dtLancamento == null || dtLancamento.trim() == "") mensagens += 'Dt Lançamento '+ "\n"
			
	    var despesa = form.getValue("ZM_DESPESA___" + indexes[index]);
	    
	    if (despesa == null || despesa.trim() == "") mensagens += 'Despesa '+ "\n"
			
	    var preco = form.getValue("C7_PRECO___" + indexes[index]);
	    
	    if (preco == null || preco.trim() == "") mensagens += 'Vlr Dia	'+ "\n"
			
		}
		
		if (mensagens.length > 0) throw 'Preencher os campos' + "\n" + mensagens; 	
	}
}

function validValue(value){
	if(value == "" || value == " " || value == null || value == undefined){
		return false
	}
	    return true	
}