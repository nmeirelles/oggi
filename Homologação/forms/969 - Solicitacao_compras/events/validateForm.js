function validateForm(form){
	var arrError=[];
	task = parseInt(getValue("WKNumState"));
	
	log.info("INFODEV WKCompletTask" + getValue("WKCompletTask"));
	if(getValue("WKCompletTask")=="true"){
		switch(task){
			case 0 : 
			case INICIO :
				if(form.getValue("filial")==""){
					arrError.push("Campo Filial é obrigatório.");
				}
				var indexes = form.getChildrenIndexes("pedidos");
				for (var i=0; i<=indexes.length; ++i){
					log.info("Entrou no for " +indexes[i]);
					if (form.getValue("codproduto___"+indexes[i]) == "" ){
						arrError.push("Produto " + (i+1) + " deve ser escolhido");
					}
					if (form.getValue("quantidade___"+indexes[i]) == "" || form.getValue("quantidade___"+indexes[i])=="NaN" || form.getValue("quantidade___"+indexes[i])=="0,000000"){
						arrError.push("Qantidade do produto " + (i+1) + " deve ser escolhido");
					}
					if (form.getValue("codcontabil___"+indexes[i]) == "" ){
						arrError.push("Conta contabil do produto " + (i+1) + " deve ser escolhido");
					}
					if (form.getValue("cc___"+indexes[i]) == "" ){
						arrError.push("Centro de custo do produto " + (i+1) + " deve ser escolhido");
					}
					if (form.getValue("dataorcamento___"+indexes[i]) == "" ){
						arrError.push("Data orçamento " + (i+1) + " deve ser escolhida");
					}
				}
			break;

			case APROVARSOLICITACAO :
				if(form.getValue("aprovarsolicitacao")==""){
					arrError.push("Não foi informado se aprova ou reprova.");
				}
			break;

			case RESOLVERPROBLEMA :

			break;

			case SERVICO :

			break;

			case COTACAO :
				log.info("Entrou na cotação");
				if(form.getValue("revisardados")=="NAO"){
					log.info("Entrou na cotação 2 ");
					var indexes = form.getChildrenIndexes("cotacao4");
					if(indexes.length!=0){	
						for (var i=0; i<indexes.length; ++i){
							log.info("Entrou na cotação 3");
							if(form.getValue("descricao4___"+indexes[i]=="") || form.getValue("fornecedor4___"+indexes[i])=="" || form.getValue("total4___"+indexes[i])=="" || form.getValue("total4___"+indexes[i])=="NaN"){
								arrError.push("A cotação vencedora não esta completa.");
							}
							if(form.getValue("total4___"+indexes[i])=="0.000000" || form.getValue("total4___"+indexes[i] )== "0,000000"){
								arrError.push("O item " + indexes[i] + "da cotação vencedora tem valor igual a zero e não pode ser integrado, favor remover o item ou ajustar o valor.");
							}
							/*
							if(form.getValue("total4___"+indexes[i]) >= form.getValue("vlrmax___"+indexes[i]) ){
								arrError.push(form.getValue("conprod___"+indexes[i]) + "da cotação vencedora é do tipo " + form.getValue("tipo___"+indexes[i]) + " e tem valor maximo de compra fixado em " + form.getValue("vlrmax___"+indexes[i]) );
							}
							*/
						}
					}else{
						arrError.push("Não há cotação vencedora, favor ajustar.");
					}if(form.getValue("forma_pg1")==""){
						arrError.push("Não foi informado a forma de pagamento.");
					}
					
				}
				if(form.getValue("revisardados")==""){
					arrError.push("Não foi informado se tem dados para revisar.");
				}
				if(form.getValue("forma_pg1")=="CARTÃO DE CREDITO"){
					if(form.getValue("numCartao1")==""){
						arrError.push("Ao selecionar a opção <strong>CARTÃO DE CREDITO</strong> o número deve ser informado.");
					}
				}
				if(form.getValue("forma_pg2")=="CARTÃO DE CREDITO"){
					if(form.getValue("numCartao2")==""){
						arrError.push("Ao selecionar a opção <strong>CARTÃO DE CREDITO</strong> o número deve ser informado.");
					}
				}
				if(form.getValue("forma_pg3")=="CARTÃO DE CREDITO"){
					if(form.getValue("numCartao3")==""){
						arrError.push("Ao selecionar a opção <strong>CARTÃO DE CREDITO</strong> o número deve ser informado.");
					}
				}
				
				
				
			break;

			case APROVARCOTACAO :
				if(form.getValue("aprovado")==""){
					arrError.push("Não foi informado a aprovação.");
				}
			break;

			case AUDITARCOTACAO:
				var indexes = form.getChildrenIndexes("cotacao4");
				for (var i=0; i<indexes.length; ++i){ 
					if(form.getValue("descricao4___"+indexes[i]=="") || form.getValue("fornecedor4___"+indexes[i])=="" || form.getValue("total4___"+indexes[i])==""){
						arrError.push("A cotação vencedora não esta completa.");
					}
				}
			break;

			case PEDIDOCOMPRAS :
				if(form.getValue("revisarpedido")=="SIM"){
					if(form.getValue("obsrevisar2")==""){
						arrError.push("Não foi informado o que deve ser revisado.");
					}
				}
			break;

			case ANEXANFE :
				if( form.getValue("f1")>0 ){
					if(form.getValue("vencimento1")==""){
						arrError.push("Não foi informado o vencimento.");
					}
				}
				if( form.getValue("f2")>0 ){
					if(form.getValue("vencimento2")==""){
						arrError.push("Não foi informado o vencimento.");
					}
				}
				if( form.getValue("f3")>0 ){
					if(form.getValue("vencimento3")==""){
						arrError.push("Não foi informado o vencimento.");
					}
				}
				if(form.getValue("nfprotheus")==""){
					arrError.push("Não foi informado a chave da DANFE.");
				}
				
			break;

			case FISCAL :
				
			break;
			
			case DIVERGENCIAPRECOMAX :
				if(form.getValue("aprovarSolicitDivergencia")==""){
					arrError.push("Não foi informado a aprovação.");
				}
			break;
			case PARCIAL :
				
				if(form.getValue("pedidoparcial")==""){
					arrError.push("Não foi informado se os itens foram todos entregues ou parcialmente.");
				}
				
			break;
		}
		if (arrError.length > 0) {
			var error = loadErrors(arrError);
			log.info("-> Fim | Compras | validateForm");
			throw error;
		}
	}
}

function loadErrors(arrError) {
	var error = "<br><br>Por favor, verifique os campos abaixo.<br><br>";
	for (var i = 0; i < arrError.length; i++) {
		var count = i + 1;
		if (parseInt(i) > 0) {
			arrError[i] = "<br><strong>" + count + "</strong> - " + arrError[i];
		}
		else {
			arrError[i] = "<strong>" + count + "</strong> - " + arrError[i];
		}
		error += arrError[i];
	}
	return error;
}


/*
//variavel que recebe o codigo referente ao estado atual do processo.
var Now_State = parseInt(getValue("WKNumState"));
var Next_State = parseInt(getValue("WKNextState"));

if ( Next_State != Now_State ){ //então valido    
    if(getValue("WKCompletTask") == "true"){}}
*/