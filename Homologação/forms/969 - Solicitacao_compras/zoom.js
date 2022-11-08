var control = 0;
var beforeSendValidate = function(numState, nextState) {
	var jsonsort = [];

	if(control == 0 && nextState == 5){
        control = 1;
        modalDecision() ;
		$("#send-modal").find("button")[0].click();
        return false;
    };
    if(nextState == 15 && control==0 ){
        control=1;
       
        var arrayerro = [];
        $('[name^="itemsc4___"]').each(function(){
            var aux = $(this).val().split("___");
            var id=$(this)[0].id.split("___")
            
            if( parseFloat($("#vlrmax___"+aux[1]).val()) < parseFloat($("#preco4___"+id[1]).val())  &&  parseFloat($("#vlrmax___"+aux[1]).val())>0  ){
            	
            	arrayerro.push("<strong>Item <span style='color:red'>"+id[1]+" </span> da cotação vencedora ultrapassou o valor maximo de "+$("#vlrmax___"+aux[1]).val()+"</strong><br>");
               
                $("#achouMaxVl").val("true");
            }
        });
        if (arrayerro.length > 0){
            var erro="";
            for (var i = 0; i < arrayerro.length; i++) {
                erro += arrayerro[i];
            }
            throw erro;
        }   
    }

	$('[name^="quantidade___"]').each(function(){
		var id=$(this)[0].id.replace("quantidade___","");
		jsonsort.push(
			{
				"codproduto":$("#codproduto___"+id).val(),
				"conprod":$("#conprod___"+id).val(),
				"UN":$("#UN___"+id).val(),
				"cc":$("#cc___"+id).val(),
				"desc_cc":$("#desc_cc___"+id).val(),
				"quantidade":$("#quantidade___"+id).val(),
				"dataorcamento":$("#dataorcamento___"+id).val(),
				"codcontabil":$("#codcontabil___"+id).val(),
				"desc_contabil":$("#desc_contabil___"+id).val(),
				"obs":$("#obs___"+id).val(),
				"necessidade":$("#necessidade___"+id).val(),
				"entrega":$("#entrega___"+id).val()
			}
		);
	});
	/*
	var jsonsort= json.sort(function (obj1, obj2) {
		return obj1.codcontabil < obj2.codcontabil ? -1 : (obj1.codcontabil > obj2.codcontabil ? 1 : 0);
	});
	*/
	$('[name^="quantidade___"]').each(function(index){
		
		var id2=$(this)[0].id.replace("quantidade___","");
		$("#codproduto___"+id2).val(jsonsort[index].codproduto);
		$("#conprod___"+id2).val(jsonsort[index].conprod);
		$("#UN___"+id2).val(jsonsort[index].UN);
		$("#cc___"+id2).val(jsonsort[index].cc);
		$("#desc_cc___"+id2).val(jsonsort[index].desc_cc);
		$("#quantidade___"+id2).val(jsonsort[index].quantidade);
		$("#dataorcamento___"+id2).val(jsonsort[index].dataorcamento);
		$("#codcontabil___"+id2).val(jsonsort[index].codcontabil);
		$("#desc_contabil___"+id2).val(jsonsort[index].desc_contabil);
		$("#obs___"+id2).val(jsonsort[index].obs);
		$("#necessidade___"+id2).val(jsonsort[index].necessidade);
		$("#entrega___"+id2).val(jsonsort[index].entrega);
		//Atualizar tableas de cotação 1,2,3,4
		for(i=1; i <= 3; i++){
			$("#descricao" + i + "___" + id2).val($("#conprod___" + id2).val());
			$("#coc" + i + "___" + id2).val($("#desc_contabil___" + id2).val());
			$("#cec" + i + "___" + id2).val($("#desc_cc___" + id2).val());
			$("#unidade" + i + "___" + id2).val($("#UN___" + id2).val());
			$("#quantidade" + i + "___" + id2).val($("#quantidade___" + id2).val());
		}
	});
	
}

var beforeMovementOptions = function(numState) {

}

function fnCustomDelete(oElement) {
	fnWdkRemoveChild(oElement);
	var index=$(oElement).parents('tr').find('input')[0].id.replace(/[^0-9]/gi, '');
	$("#descricao1___"+index).parents('tr').remove();
	$("#descricao2___"+index).parents('tr').remove();
	$("#descricao3___"+index).parents('tr').remove();
	//$("#descricao4___"+index).parents('tr').remove();
}

function fnCustomDeleteAll() {
	$('#pedidos tbody tr').not(':first').remove();
	$('#cotacao1 tbody tr').not(':first').remove();
	$('#cotacao2 tbody tr').not(':first').remove();
	$('#cotacao3 tbody tr').not(':first').remove();
	//$('#cotacao4 tbody tr').not(':first').remove();
}

function escolhido(oElement,index){
	const isMarked = $('input[name="'+oElement.id+'"]').is(':checked')
	const [input, idInput] = oElement.id.split('___')
	const lastNumber = input[input.length-1]

	if(isMarked){
		if(validValue( $('#CNOME'+lastNumber).val()[0] )){
			FLUIGC.toast({
				title: ' ',
				message: `Para inserir uma item na cotação vencedora deve ser selecionado o Fornecedor.`,
				type: 'danger'
			});

			$('input[name="'+oElement.id+'"]').prop('checked', false)
			return false;
		}

		if(validValue( $('#CODCOND'+lastNumber).val()[0] )){
			FLUIGC.toast({
				title: ' ',
				message: `Para inserir uma item na cotação vencedora deve ser selecionado a condição de pagamento.`,
				type: 'danger'
			});

			$('input[name="'+oElement.id+'"]').prop('checked', false)
			return false;
		}if(validValue( $('#forma_pg'+lastNumber).val()[0] )){
			FLUIGC.toast({
				title: ' ',
				message: `Para inserir uma item na cotação vencedora deve ser selecionado a forma de pagamento.`,
				type: 'danger'
			});

			$('input[name="'+oElement.id+'"]').prop('checked', false)
			return false;
		}

		if(parseFloat($('#preco' + lastNumber + '___' + idInput).val().replace(',','.')) == 0 || $('#preco'+lastNumber+'___'+idInput).val() == ""){
			FLUIGC.toast({
					title: ' ',
					message: `Deve ser inserido valor unitario para o produto ${$('#descricao'+lastNumber+'___'+idInput).val()}`,
					type: 'danger'
			});

			$('input[name="'+oElement.id+'"]').prop('checked', false)

			return false;
		}		

		//const cotacoes4 = $('input[name^="descricao4___"]')
		const cotacoes4 = $('input[name^="itemsc4___"]');
		for (let cotacao4 of cotacoes4) {
			var aux = oElement.id.replace("escolhido","");
			if(cotacao4.value == aux){
				fnWdkRemoveChild($('#'+cotacao4.id).parent().parent().parent()[0])
			}
		}
	}

	if(!isMarked){
		
		//const values = $('input[name^="descricao4___"]');
		const values = $('input[name^="itemsc4___"]');
		for (let value of values) {
			/*
			let [input, idInputValue] = value.id.split('___')
			let lastNumber = input[input.length-1]
			let vencDescricao = $('#descricao'+index +'___' +  idInput)
			let preco = $('#preco'+index +'___' +  idInput).val()
			let total = $('#total'+index +'___' +  idInput).val()
			
			let precoVencedora = $('#preco'+lastNumber +'___' +  idInputValue).val()
			let totalVencedora = $('#total'+lastNumber +'___' +  idInputValue).val()
			
			if(value.value == vencDescricao.val() && preco.replace('.','').replace(',','')  == precoVencedora.replace('.','').replace(',','')  && total.replace('.','').replace(',','')  == totalVencedora.replace('.','').replace(',','') ){
				fnWdkRemoveChild($('#'+value.id).parent().parent().parent()[0])
			}
			*/
			var aux = oElement.id.replace("escolhido","");
			if (value.value==aux) {
				fnWdkRemoveChild($('#'+value.id).parent().parent().parent()[0])
			}
		}
		
		$('#preco'+index +'___' +  idInput).parents('tr').css("background-color","white");

		return false;
	}
	

	var id = $(oElement).parents('tr').find('input')[0].id.split("___");
	id[0]=id[0].replace(/[^0-9]/gi, '');
	for(i=1;i<4;i++){
		if(i==id[0]){
			let lineCotacao = wdkAddChild('cotacao4').toString().trim();
			$("#escolhido" + i + "___"+id[1]).val("1");
			$("#descricao" + i + "___"+id[1]).parents('tr').css("background-color","green");
			$("#fornecedor4___"+lineCotacao).val($("#CNOME"+i).val());
			$("#CCOD4___"+lineCotacao).val($("#CCOD" + i).val());
			$("#descricao4___"+lineCotacao).val($("#descricao"+index+"___"+id[1]).val());
			$("#preco4___"+lineCotacao).val($("#preco"+index+"___"+id[1]).val().replace(/[.]/gm, "").replace(",", "."));
			$("#total4___"+lineCotacao).val($("#total"+index+"___"+id[1]).val().replace(/[.]/gm, "").replace(",", "."));
			$("#ipi4___"+lineCotacao).val( $("#ipi"+index+"___"+id[1]).val() );
			$("#aprovador4___"+lineCotacao).val(id[1]);
			$("#itemsc4___"+lineCotacao).val(index+"___"+id[1]);
			for(ii=1;ii<4;ii++){
				if(ii!=i){
					$("#escolhido" + ii + "___"+id[1]).val("0");
					$("#descricao" + ii + "___"+id[1]).parents('tr').css("background-color","white");
					$("#escolhido" + ii + "___"+id[1]).prop('checked', false);
				}else{
					if(!$("#escolhido" + ii + "___"+id[1]).prop('checked')){
						$("#escolhido" + ii + "___"+id[1]).val("0");
						$("#fornecedor4___"+lineCotacao).val("");
						$("#preco4___"+lineCotacao).val("");
						$("#total4___"+lineCotacao).val("");
					}
				}
			};
			break;
		}else{

		}
	}
}

function calcula(oElement,index){//Calcula o valor total do item cotado
	if (!($(oElement).val().match(/[,][0-9]{6}/gm)) ) {
		$(oElement).val($(oElement).val().replace(/[,]/gm, "."));
		//event.preventDefault();
		var val = new Number($(oElement).val());//.replace(/[.]/gm, "").replace(",", ".")
		var valorFormatado = (val).toLocaleString("pt-BR", {
			minimumFractionDigits: 6,
			maximumFractionDigits: 6,
		});
		$(oElement).val(valorFormatado);
	}

	var soma=0;
	var id = $(oElement)[0].id.split("___");
	soma = $("[name=quantidade"+index+"___"+id[1]+"]").val().replace(/[.]/gm, "").replace(",", ".") * $("[name=preco"+index+"___"+id[1]+"]").val().replace(/[.]/gm, "").replace(",", "."); //Faz o calculo convertendo a string em float
	soma = soma + ( soma * parseFloat( $("#ipi"+index+"___"+id[1]).val() ) / 100 );
	$("#total"+index+"___"+id[1]).val((soma).toLocaleString("pt-BR", {minimumFractionDigits: 6,maximumFractionDigits: 6,}));
	$("#totalcotacao"+index).val( ( somafornecedor(index) ).toLocaleString( "pt-BR", {minimumFractionDigits: 6,maximumFractionDigits: 6,} ) );
	$("#valortotalcomfrete"+index).val( ( $("#totalcotacao"+index).val().replace(/[.]/gm, "").replace(",", ".") )*1.0 + ( $("#frete"+index).val().replace(/[.]/gm, "").replace(",", ".") )*1.0 );
	var aux = new Number($("#valortotalcomfrete"+index).val());
	$("#valortotalcomfrete"+index).val( aux.toLocaleString("pt-BR", {minimumFractionDigits: 6,maximumFractionDigits: 6}) );
}

function somafornecedor(index){
	var totalcotacao=0;
	$('input[name^="total'+index+'"]').not(':first').each(function(count){
		var total = new Number( $(this).val().replace(/[.]/gm, "").replace(",", ".") );
		totalcotacao+=total;
	});
	return totalcotacao;
}

function showCamera(parameter) {
	JSInterface.showCamera(parameter);
}

// Funcao preencher campo zoom
function setSelectedZoomItem(selectedItem) {
	var nome = "filial";
	var id = selectedItem.inputId.split("___");
	if (selectedItem.inputId == nome) {
		var Empresa;
		console.log("------ Atualizando zoom de ID FILIAL --------------");
		document.getElementById('filial_cod2').value = selectedItem['filial_cod'];
		document.getElementById('empresa_cod2').value = selectedItem['empresa_cod'];
		Empresa = document.getElementById('empresa_cod2').value;
		$("#ADICIONARITEM").show();
		$("#myTab12").show();
	}

	// preencher pai e filho ZOOM Produto
	if (selectedItem.inputId.indexOf("conprod___") != -1) {
		window["conprod___" + id[1]].setValue(selectedItem["B1_DESC"]);
		document.getElementById('codproduto___' + id[1]).value = selectedItem['B1_COD'];
		document.getElementById('UN___' + id[1]).value = selectedItem['B1_UM'];
		document.getElementById('UPreco___' + id[1]).value = selectedItem['B1_UPRC'];
		document.getElementById('cgrupo___' + id[1]).value = selectedItem['B1_GRUPO'];
		document.getElementById('tipo___' + id[1]).value = selectedItem['B1_TIPO'];
		document.getElementById('vlrmax___' + id[1]).value = selectedItem['B1_XCUSTM'];
		if (parseInt(selectedItem['B1_PE']) > 10) {
			var min = moment().add(parseInt(selectedItem['B1_PE']), 'days').format("YYYY-MM-DD");
		} else {
			var min = moment().add(10, 'days').format("YYYY-MM-DD");
		}
		$("#entrega___" + newId).val(min);
		document.getElementsByName("entrega___" + newId)[0].setAttribute('min',min);
		$("#entrega___" + newId).blur(function() {
			var data = moment().add(12, 'days').format("YYYY-MM-DD");
			var digitado = moment($(this).val());
			if (digitado.isBefore(data)) {
				$("#entrega___" + newId).val(min);
			}
		});
		
		//regra de negocio
		if (selectedItem['B1_TIPO'] == "EM" || selectedItem['B1_TIPO'] == "ME"|| selectedItem['B1_TIPO'] == "MP") {
			$("#empresa").val("02");
		}
		var dataset = DatasetFactory.getDataset('DTS_PARAM_COMPRAS', null, null, null);

		$.each(dataset.values,function(){
			if (this.B1_TIPO==selectedItem['B1_TIPO']){

			}
		});

		if (validValue(selectedItem['B1_POSIPI'])) {
			FLUIGC.toast({
				title: 'Aviso: ',
				message: 'Este produto não possui NCM preechido, contatar departamento de cadastro de produto.',
				type: 'danger'
			});
			window["conprod___"+id[1]].clear();
		}
		$('[name^="cgrupo___"]').each(function() {
			if ($("#grupo").val().indexOf($(this).val()) == -1) {
				$("#grupo").val($("#grupo").val() + " " + $(this).val());
			}
		});
	}
	// preencher pai e filho ZOOM Centro de custo
	if (selectedItem.inputId.indexOf("desc_cc___") != -1) {
		document.getElementById('cc___' + id[1]).value = selectedItem['Codigo'];
		reloadZoomFilterValues("desc_contabil___" + id[1], "DBK_CC,"+ selectedItem['Codigo'] + ",IDPROTHEUS,"+ $("#id_protheus").val());
	}
	if (selectedItem.inputId.indexOf("desc_contabil___") != -1) {
		document.getElementById('codcontabil___' + id[1]).value = selectedItem['ZM_CONTA'];
	}
	if (selectedItem.inputId == "CNOME1") {

		if(($("#CNOME2").val() == selectedItem.NomeCGC && $("#moeda1").val() ==$("#moeda2").val())|| ($("#CNOME3").val() == selectedItem.NomeCGC && $("#moeda1").val() ==$("#moeda3").val())){

			window['CNOME1'].clear()

			FLUIGC.toast({
				title: 'Aviso: ',
				message: 'Fornecedor já foi selecionado.',
				type: 'danger'
			});

			return false
		}
		
		$("#CCOD1").val(selectedItem.Codigo);
		$("#CLOJA1").val(selectedItem.CLOJA);
	}
	if (selectedItem.inputId == "CNOME2") {

		if(($("#CNOME1").val() == selectedItem.NomeCGC && $("#moeda1").val() && $("#moeda2").val()) || ($("#CNOME3").val() == selectedItem.NomeCGC && $("#moeda2").val() ==$("#moeda3").val())){

			window['CNOME2'].clear()

			FLUIGC.toast({
				title: 'Aviso: ',
				message: 'Fornecedor já foi selecionado.',
				type: 'danger'
			});

			return false
		}

		$("#CCOD2").val(selectedItem.Codigo);
		$("#CLOJA2").val(selectedItem.CLOJA);
	}
	if (selectedItem.inputId == "CNOME3") {

		if(($("#CNOME1").val() == selectedItem.NomeCGC && $("#moeda3").val() ==$("#moeda1").val()) || ($("#CNOME2").val() == selectedItem.NomeCGC && $("#moeda2").val() ==$("#moeda3").val())){

			window['CNOME3'].clear()

			FLUIGC.toast({
				title: 'Aviso: ',
				message: 'Fornecedor já foi selecionado.',
				type: 'danger'
			});

			return false
		}

		$("#CCOD3").val(selectedItem.Codigo);
		$("#CLOJA3").val(selectedItem.CLOJA);
	}
	if (selectedItem.inputId == "COND1") {
		$("#CODCOND1").val(selectedItem.Id);
		console.log("selectedItem.Id" +selectedItem.Id)
	}
	if (selectedItem.inputId == "COND2") {
		$("#CODCOND2").val(selectedItem.Id);
	}
	if (selectedItem.inputId == "COND3") {
		$("#CODCOND3").val(selectedItem.Id);
	}
	if (selectedItem.inputId.match(/forma_pg/gm)) {
		var i = selectedItem.inputId.match(/[0-9]/gm);
		if(selectedItem.Formapg == "PIX"){
			$(".pix"+i).show();
			$(".banco"+i).hide();
			$(".cartao"+i).hide();
		}
		if(selectedItem.Formapg == "TRANSFERÊNCIA BANCÁRIA"){
			$(".banco"+i).show();
			$(".pix"+i).hide();
			$(".cartao"+i).hide();
		}
		if(selectedItem.Formapg == "CARTÃO DE CREDITO"){
			$(".banco"+i).hide();
			$(".pix"+i).hide();
			$(".cartao"+i).show();
		}

	}
}
var remp = "";
var rcemp = "";
var rcfil = "";

function removedZoomItem(removedItem) {
	let [input, index] = removedItem.inputId.indexOf('___') != -1 ? removedItem.inputId.split('___') : ''

	if (validValue(remp)) {
		rcfil = removedItem.filial_cod;
		rcemp = removedItem.empresa_cod;
		remp = removedItem.empresa_desc;
	}
	if (removedItem.inputId == "filial") {
		console.log("------ Atualizando zoom de ID FILIAL --------------");
		document.getElementById('filial_cod2').value = ""
		document.getElementById('empresa_cod2').value = ""
		var myModal = FLUIGC.modal({
			title : 'Alerta!!!',
			content : '<h1>Todos os produtos serão removidos, Contiunuar? </h1>',
			id : 'rp-modal',
			size : 'large',
			actions : [{
				'label' : 'Sim',
				'autoClose' : true,
				'bind' : 'data-limpar'
			},{
				'label' : 'Cancelar',
				'bind' : 'data-cancelar',
				'autoClose' : true
			}]
		}, 
		function(err, data) {
			if (err) {
				// do error handling
			} else {
				// do something with data
			}
		});
		$('[data-limpar]').click(function() {
			fnCustomDeleteAll();
			$("#ADICIONARITEM").hide();
			remp = "";
			rcemp = "";
			rcfil = "";
		});
		$('[data-cancelar]').click(function(){
			// setZoomData("filial", removedItem["filial"]);
			window["filial"].setValue(remp);
			$("#empresa_cod2").val(rcemp);
			$("#filial_cod2").val(rcfil);
		});
		$('.close').click(function(){
			// setZoomData("filial", removedItem["filial"]);
			window["filial"].setValue(remp);
			$("#empresa_cod2").val(rcemp);
			$("#filial_cod2").val(rcfil);
		});
	}

	if (input == "conprod"){
		$('#codproduto___' + index).val('')
	}

	if (input == "desc_contabil"){
		$('#codcontabil___' + index).val('')
	}

	if (input == "desc_cc"){
		$('#cc___' + index).val('')
	}
	
	if ( removedItem.inputId.startsWith("CNOME") ) {
		var id = removedItem.inputId.replace("CNOME");
		$("input[name^=fornecedor4]").not(':first').each(function(){
			if( $(this).val()==removedItem.NomeCGC ){
				var id2=$(this)[0].id.replace("fornecedor4___","");
				$("#escolhido1___"+id2).prop( "checked", false );
				$("#escolhido2___"+id2).prop( "checked", false );
				$("#escolhido3___"+id2).prop( "checked", false );
				$(this).val("");
			}	
		});
	}
	if (removedItem.inputId == "forma_pg1") {
		$(".pix1").hide();
		$(".banco1").hide();
		$(".cartao1").hide();
	}
	if (removedItem.inputId == "forma_pg2") {
		$(".pix2").hide();
		$(".banco2").hide();
		$(".cartao2").hide();
	}
	if (removedItem.inputId == "forma_pg3") {
		$(".pix3").hide();
		$(".banco3").hide();
		$(".cartao3").hide();
	}
}

function filtaritem(){
	var emp = $('#empresa_cod2').val();
	var fil = $('#filial_cod2').val();
	var usr = $("#id_protheus").val();
	$("[id^='conprod___']").each(function() {
		var id = this.id.replace("conprod___", "");
		reloadZoomFilterValues("conprod___" + id, "B1_EMP," + emp+ ",B1_FILIAL," + fil);
		reloadZoomFilterValues("desc_cc___" + id, "DBK_USER,"+ $("#id_protheus").val() + ",B1_EMP," + emp+ ",B1_FILIAL," + fil);
	});
}
function moeda(){
	$(".money").keydown( function(event) {
		var code = event.keyCode || event.which;
		$(this).val($(this).val().replace(/[,]/gm, "."));
		if ( code == 13 || code == 9) {
			//event.preventDefault();
			var val = new Number($(this).val());//.replace(/[.]/gm, "").replace(",", ".")
			var valorFormatado = (val).toLocaleString("pt-BR", {
				minimumFractionDigits: 6,
				maximumFractionDigits: 6,
			});
			$(this).val(valorFormatado);
		}
	});
	$(".money").blur( function(oElement) {
		if (!($(oElement)[0].target.value.match(/[,][0-9]{6}/gm)) ) {
			$(oElement)[0].target.value=$(oElement)[0].target.value.replace(/[,]/gm, ".") ;
			//event.preventDefault();
			var val = new Number($(oElement)[0].target.value);
			var valorFormatado = (val).toLocaleString("pt-BR", {
				minimumFractionDigits: 6,
				maximumFractionDigits: 6,
			});
			$(oElement)[0].target.value=valorFormatado;
		}
	});
}

function validValue(value){
	if(value == "" || value == " " || value == null || value == undefined || value == "null" || value == "undefined" || value == " - "){
		return true
	}
	    return false	
}

$(document).ready(function() {
	$("#et1").click(function(){
		$("[name^='escolhido1___']").each(function(){
			const isChecked = $(this).is(':checked')
			$('#' + this.id).prop('checked', !isChecked);
			escolhido(this,'1');
		});
	});

	$("#et2").click(function(){
		$("[name^='escolhido2___']").each(function(){
			const isChecked = $(this).is(':checked')
			$('#' + this.id).prop('checked', !isChecked);
			escolhido(this,'2');
		});
	});

	$("#et3").click(function(){
		$("[name^='escolhido3___']").each(function(){
			const isChecked = $(this).is(':checked')
			$('#' + this.id).prop('checked', !isChecked);
			escolhido(this,'3');
		});
	});
	
	var tabindex=1;
	$("[name^='preco']").not(":first").each(function(index){
		var id=$(this)[0].id.split("___");
		if(!$.isArray(id)){
			return;
		}
		var f=id[0].replace(/[a-zA-Z]+/g,"");

		$("#preco"+f+"___"+id[1]).attr("tabindex", tabindex);
		tabindex++;
		$("#ipi"+f+"___"+id[1]).attr("tabindex", tabindex);
		tabindex++;
	});

	var timeout = setTimeout(function() {
		if(typeof window["data-zoom_filial"] != 'undefined'){
			if(window["data-zoom_filial"].hasOwnProperty("displayKey")==true){
				var emp = $('#empresa_cod2').val();
				var fil = $('#filial_cod2').val();
				var usr = $("#id_protheus").val();
				$("[id^='conprod___']").each(function() {
					var id = this.id.replace("conprod___", "");
					console.log("EMPRESA" + emp+ ",FILIAL," + fil)
					reloadZoomFilterValues("COND1", "EMPRESA," + emp+ ",FILIAL," + fil);
					reloadZoomFilterValues("COND2", "EMPRESA," + emp+ ",FILIAL," + fil);
					reloadZoomFilterValues("COND3", "EMPRESA," + emp+ ",FILIAL," + fil);
					reloadZoomFilterValues("conprod___" + id, "B1_EMP," + emp+ ",B1_FILIAL," + fil);
					reloadZoomFilterValues("desc_cc___" + id, "DBK_USER,"+ $("#id_protheus").val() + ",B1_EMP," + emp+ ",B1_FILIAL," + fil);
				});
				clearTimeout(timeout);
			}
		}else{
			if(window["data-zoom_COND1"].hasOwnProperty("displayKey")==true){
				var emp = $('#empresa_cod2').val();
				var fil = $('#filial_cod2').val();
				var usr = $("#id_protheus").val();
				reloadZoomFilterValues("COND1", "EMPRESA," + emp+ ",FILIAL," + fil);
				console.log("EMPRESA" + emp+ ",FILIAL," + fil)
				reloadZoomFilterValues("COND2", "EMPRESA," + emp+ ",FILIAL," + fil);
				reloadZoomFilterValues("COND3", "EMPRESA," + emp+ ",FILIAL," + fil);
				clearTimeout(timeout);
			}
		}
	}, 3000);

	if(getWKNumState() != 0 && getWKNumState() != 4) $("#myTab12").show();

	var min = moment().add(12, 'days').format("YYYY-MM-DD");
	var proximo = moment().add(1, 'months').endOf('month').format("YYYY-MM-DD");
	var hoje = moment().format("YYYY-MM-DD");
	document.getElementsByName("vencimento1")[0].setAttribute('min', min);
	document.getElementsByName("vencimento2")[0].setAttribute('min', min);
	document.getElementsByName("vencimento3")[0].setAttribute('min', min);
	$("#ADICIONARITEMB").click(function(event) {
		if(getWKNumState() == 0 || getWKNumState() == 4){
			$('#iconWarning').show()
			wdkAddChild('pedidos');
			wdkAddChild('cotacao1');
			wdkAddChild('cotacao2');
			wdkAddChild('cotacao3');
			// wdkAddChild('cotacao4');
			moeda();
			// Filtrar Cliente por Empresa
			var emp = $('#empresa_cod2').val();
			var fil = $('#filial_cod2').val();
			var usr = $("#id_protheus").val();
			reloadZoomFilterValues("conprod___" + newId, "B1_EMP,"+ emp + ",B1_FILIAL," + fil);
			reloadZoomFilterValues("desc_cc___" + newId,"DBK_USER," + $("#id_protheus").val()+ ",B1_EMP," + emp + ",B1_FILIAL,"+ fil);
			$("#grupo").val("");
		}
		document.getElementsByName("dataorcamento___" + newId)[0].setAttribute('min', hoje);
		document.getElementsByName("dataorcamento___" + newId)[0].setAttribute('max', proximo);
		$("dataorcamento___" + newId).val(hoje);
	});
	$("#RECARREGARFILTRO").click(function() {
		filtaritem();
	});
	$("#aprovarsolicitacao").change(function() {
		$("#motivorecusa").toggle();
		$("#lmotivorecusa").toggle();
	});
	$("#urgente").change(function() {
		$("#dnota").toggle();
	});
	$("#frete1").blur(function(){
		var total = new Number( $("#totalcotacao1").val().replace(/[.]/gm, "").replace(",", ".") );
		var frete = new Number( $("#frete1").val().replace(/[.]/gm, "").replace(",", ".") );
		$("#valortotalcomfrete1").val( (frete + total).toLocaleString("pt-BR", {
			minimumFractionDigits: 6,
			maximumFractionDigits: 6,
		}));
	});
	$("#frete2").blur(function(){
		var total = new Number( $("#totalcotacao2").val().replace(/[.]/gm, "").replace(",", ".") );
		var frete = new Number( $("#frete2").val().replace(/[.]/gm, "").replace(",", ".") );
		$("#valortotalcomfrete1").val( (frete + total).toLocaleString("pt-BR", {
			minimumFractionDigits: 6,
			maximumFractionDigits: 6,
		}));
	});
	$("#frete3").blur(function(){
		var total = new Number( $("#totalcotacao3").val().replace(/[.]/gm, "").replace(",", ".") );
		var frete = new Number( $("#frete3").val().replace(/[.]/gm, "").replace(",", ".") );
		$("#valortotalcomfrete1").val( (frete + total).toLocaleString("pt-BR", {
			minimumFractionDigits: 6,
			maximumFractionDigits: 6,
		}));
	});
	$("#vencimento1").blur(function(){ 
		var data = moment().add(12,'days').format("YYYY-MM-DD"); 
		var digitado=moment($(this).val());
		if( digitado.isBefore(data) ){ 
			$("#vencimento1").val(""); 
			FLUIGC.toast({
				title: 'Aviso: ',
				message: 'A data de vencimento não pode ser inferior a 12 dias apartir da data atual',
				type: 'danger'
			});
		} 
	}); 
	$("#vencimento2").blur(function(){ 
		var data = moment().add(12,'days').format("YYYY-MM-DD"); 
		var digitado=moment($(this).val());
		if( digitado.isBefore(data) ){ 
			$("#vencimento2").val(""); 
			FLUIGC.toast({
				title: 'Aviso: ',
				message: 'A data de vencimento não pode ser inferior a 12 dias apartir da data atual',
				type: 'danger'
			});
		} 
	}); 
	$("#vencimento3").blur(function(){ 
		var data = moment().add(12,'days').format("YYYY-MM-DD"); 
		var digitado=moment($(this).val());
		if( digitado.isBefore(data) ){ 
			$("#vencimento3").val(""); 
			FLUIGC.toast({
				title: 'Aviso: ',
				message: 'A data de vencimento não pode ser inferior a 12 dias apartir da data atual',
				type: 'danger'
			});
		} 
	}); 
	$("#aprovado").change(function(index) {
		$("#motivo").toggle();
		$("#lmotivo").toggle();
		$("#aprovarcotacao").toggle();
	});
	$("#pg_ant").change(function(index) {
		if ($("#pg_ant").val() == "S") {
			var min = moment().format("YYYY-MM-DD");
			$("#entrega___" + newId).val(min);
			document.getElementsByName("entrega___" + newId)[0].setAttribute('min', min);
		} else {
			var min = moment().add("10", 'days').format(
					"YYYY-MM-DD");
			$("#entrega___" + newId).val(min);
			document.getElementsByName("entrega___" + newId)[0].setAttribute('min', min);
		}
	});
	$('input').each(function() {
		if ($(this).css("display")=="none" && this.id.search("___") == -1) {
			$("label[for='" + this.id + "']").hide();
		}
	});
	moeda();
});

function buildOrcamento(){
	$('#iconWarning').hide()
	if($('#tableOrcamentario').find('table').length > 0){
		$('#tableOrcamentario').find('table')[0].remove()
	}

	const inputs = $('input[name^="codproduto___"]');
	const empresa = $('#empresa_cod2').val();
	const filial = $('#filial_cod2').val();

	let objItens = []
	for (let input of inputs) {
		let index = input.id.split('___')[1];
		let dataorcamento = $('#dataorcamento___' + index).val().trim();
		let codcontabil = $('#codcontabil___' + index).val().trim();
		let cc = $('#cc___' + index).val().trim();
		let valor = parseFloat($('#quantidade___' + index).val().replace(',','.')) * parseFloat($('#UPreco___' + index).val().replace(',','.'));
		let id = moment(dataorcamento).format('YYYY-MM')  + codcontabil +cc;
		let descContabil = '';
		let descCC = '';

		if($('#desc_contabil___' + index)[0].localName == 'input'){
			descContabil = $('#desc_contabil___' + index).val() == undefined ? '' : $('#desc_contabil___' + index).val()
			descCC = $('#desc_cc___' + index).val() == undefined ? '' : $('#desc_cc___' + index).val()
		}else{
			descContabil = $('#desc_contabil___' + index).val()[0] == undefined ? '' : $('#desc_contabil___' + index).val()[0]
			descCC = $('#desc_cc___' + index).val()[0] == undefined ? '' : $('#desc_cc___' + index).val()[0]
		}

		

		if(objItens.length > 0 ){
			let returObj = objItens.filter(val => {
				if(val['id'] == id){
					val['valor'] = val['valor'] + valor
					return true
				}
				return false
			})

			if(returObj.length == 0){
				objItens.push({
					id:moment(dataorcamento).format('YYYY-MM')  + codcontabil +cc,
					data: dataorcamento, 
					contabil: codcontabil+' - '+descContabil,
					cc: cc+' - '+descCC,
					valor:valor
				})
			}
		
		}else{
			objItens.push({
				id:moment(dataorcamento).format('YYYY-MM')  + codcontabil +cc,
				data: dataorcamento, 
				contabil: codcontabil+' - '+descContabil,
				cc: cc+' - '+descCC,
				valor:valor
			})
		}
		
	}

	var html = '';

	for(let objIten of objItens){
		const constraint = []
		
		constraint.push(DatasetFactory.createConstraint('EMPRESA', empresa, empresa, ConstraintType.MUST));
		constraint.push(DatasetFactory.createConstraint('FILIAL',  filial, filial, ConstraintType.MUST));
		constraint.push(DatasetFactory.createConstraint('CONTACONTABIL', objIten['contabil'].split(' - ')[0], objIten['contabil'].split(' - ')[0], ConstraintType.MUST));
		constraint.push(DatasetFactory.createConstraint('CENTROCUSTO', objIten['cc'].split(' - ')[0], objIten['cc'].split(' - ')[0], ConstraintType.MUST));
		constraint.push(DatasetFactory.createConstraint('PERIODO', moment(objIten['data']).format('YYYY-MM'), moment(objIten['data']).format('YYYY-MM'), ConstraintType.MUST));
		
		var saldo = DatasetFactory.getDataset("ds_busca_saldo", null, constraint, null);
		let orcado =  "0,00"
		let disponivel = "0,00"
		let realizado = "R$ 0,00"
		

		if(saldo.values.length > 0 && saldo.values[0].CCONTA != 'erro'){
			orcado =  convertValue(saldo.values[0].NORCADO)
			disponivel = convertValue(saldo.values[0].NSLDORC)
			realizado = convertValue(saldo.values[0].NREALIZADO)
		}

		if(!validValue(objIten['data']) && !validValue(objIten['contabil']) && !validValue(objIten['cc']) && !validValue(objIten['valor'])){
			html += `<tr>
				<td>${moment(objIten['data']).format('DD/MM/YYYY')}</td>
				<td>${objIten['contabil']}</td>
				<td>${objIten['cc']}</td>		
				<td>${realizado}</td>
				<td>${orcado}</td>
				<td>${convertValue(objIten['valor'])}</td>
				<td>${convertValue(parseFloat(realizado.split('R$ ')[1]) - objIten['valor'])}</td>
			</tr>`
		}	
	}

	$( "#tableOrcamentario" ).append(`	
	<table>
		<tr>
			<th>Data Orçamento</th>
			<th>Conta Contabil</th>
			<th>Centro Custo</th>
			<th>Realizado</th>
			<th>Orçado</th>
			<th>Valor do Documento</th>
			<th> 
				Saldo Disponível
				<i class="flaticon flaticon-info icon-sm" data-toggle="tooltip" data-placement="top" title="" data-original-title="Relalizado - Valor do Documento"></i>
			</th>
		</tr>
	
		${html}
		

	</table>`);

	return `	
		<style>
			table {
				font-family: arial, sans-serif;
				border-collapse: collapse;
				width: 100%;
			}
			
			table td, th {
				border: 1px solid #dddddd;
				text-align: left;
				padding: 8px;
			}
			
			table tr:nth-child(even) {
				background-color: #dddddd;
			}
		</style>
		<table>
			<tr>
				<th>Data Orçamento</th>
				<th>Conta Contabil</th>
				<th>Centro Custo</th>
				<th>Realizado</th>
				<th>Orçado</th>
				<th>Valor do Documento</th>
				<th>Saldo Disponível</th>
			</tr>
			${html}
		</table>`
}

function convertValue(value){
	return value.toLocaleString('pt-br',{
			style: 'currency', 
			currency: 'BRL'
		})
}

function modalDecision(){
    FLUIGC.modal({
        title: 'Previsão Orçamentaria',
        content: buildOrcamento(),
        id: 'po-modal',
        size: 'large',
        actions: [{
            'label': 'Validado',
            'autoClose': true,
            'bind': 'data-sim'
        }]
    }, function(err, data) {
        if(err) {
            // do error handling
        } else {
            // do something with data
        }
    });
    
    $('.close').hide()

    $('[data-sim]').click(function() {
        $('#alinhamento  option[value=sim]').attr('selected','selected');
        $("#workflowActions > button:first-child", window.parent.document).click(); 
    });
}

function changeCancelMenu() {
    // Quando está em atividade do Responsável que é Solicitante só melhora o alerta
    parent.$("a[data-cancel-workflow-request]")
        .css({"color": "#FFF", "backgroundColor": "#d9534f"})
        .html("Cancelar a Solicitação")
        .on("click", function () {
            setTimeout(function () {
                const modal = parent.$("#workflowView-cancel-modal");
                modal.find("h4").html("<b>Esta ação também vai cancelar o protheus</b>");
                modal.find(".modal-body").html(
					'<select name="txtCancelamento" id="workflowview-detail-cancelText" class="form-control">'+
						'<option value"Centro de Custo errado">Centro de Custo errado</option>'+
						'<option value"Troca de fornecedor">Troca de fornecedor</option>'+
						'<option value"Produto com código errado">Produto com código errado</option>'+
						'<option value"Outros">Outros</option>'+
					'</select>'
				)
				modal.find(".btn-primary").removeClass("btn-primary").addClass("btn-danger").html("Cancelar");
            }, 400);
    });
};
function marcarPrecoMax(){
	
	

	 $('[name^="itemsc4___"]').each(function(){
	
			
          var aux = $(this).val().split("___");
          var id=$(this)[0].id.split("___")
          if( parseFloat($("#vlrmax___"+aux[1]).val()) < parseFloat($("#preco4___"+id[1]).val())  &&  parseFloat($("#vlrmax___"+aux[1]).val())>0  ){
        
	               
	               $('input[name*="descricao4___'+id[1]+'"]').attr('style','color: red');
	               $('input[name*="preco4___'+id[1]+'"]').attr('style','color: red');
	               $('input[name*="fornecedor4___'+id[1]+'"]').attr('style','color: red');
	               $('input[name*="total4___'+id[1]+'"]').attr('style','color: red');
	               $('input[name*="ipi4___'+id[1]+'"]').attr('style','color: red');
	               $('input[name*="aprovador4___'+id[1]+'"]').attr('style','color: red');
	               $('input[name*="cec4___'+id[1]+'"]').attr('style','color: red');
	               $('input[name*="status4___'+id[1]+'"]').attr('style','color: red');
	               $("#achouMaxVl").val("true");
                
          }
      });


}
(function ($) {
    $.fn.serializeFormJSON = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

$(function () {
    changeCancelMenu();
});
