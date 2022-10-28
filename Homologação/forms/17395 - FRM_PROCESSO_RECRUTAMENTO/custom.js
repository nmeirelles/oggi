$(document).ready(function(){
	if(DFAtividade == 8 || DFAtividade == 10 || DFAtividade == 56){
		$("#seccao_aprovacao_de_vaga").hide();
	}
	
	if (DFAtividade==15){
		$("#seccao_aprovacao_de_vaga").hide();
		$("#seccao_analise_de_curriculo").hide();
	}
	let date = new Date();
	let day = date.getDate();
	let Month = date.getMonth()+1;
	let year = date.getFullYear();
	var aControleInpputs = $('#controleInputs').val().split(',');
	var totalAnexo = parent.ECM.attachmentTable.getData().length
	
	if(totalAnexo > 0){
		$('.label-default').empty()
		$('.label-default').append(totalAnexo)
	}
	
	var dtaInicio = FLUIGC.calendar('#dataSolicitacao', {
	    pickDate: true,
	    pickTime: false
	});

	FLUIGC.calendar('#horaDe', {
	    pickDate: false,
	    pickTime: true
	});

	FLUIGC.calendar('#horaAte', {
	    pickDate: false,
	    pickTime: true
	});
	hideCollapse(DFAtividade);

	if(DFAtividade == 19){
		window.parent.$("#workflowActions").hide();
		window.parent.$('.modal-footer').hide();
		var idAdmissao = parseFloat($('#IdAdmissao').val())
		$(".itens").append("<li style='list-style-type: none;' id="+idAdmissao+"><a target='_blank' href='https://sogelotst.fluig.com/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="+idAdmissao+"'>Realizado a abertura do processo de admissão, solicitação #"+idAdmissao+"</a></li>");
	}

	$('#dataSolicitacao').val(day+'/'+String(Month).padStart(2, '0')+'/'+year);
	$('#vaga').on('click', function() {
		if($('#'+$('#vaga').find('input')[1].id).is(':checked') || ($('#'+$('#vaga').find('input')[2].id).is(':checked'))){
			$('#colab').parent().find('label')[0].innerHTML = 'Nome do colaborador a ser substituído:<strong style="color:red">*</strong>';
			$('#substitudoColaborador').show();
		}else{
			$('#colab').parent().find('label')[0].innerHTML = 'Nome do colaborador a ser substituído:';
			$('#substitudoColaborador').hide();
		}    
	});

	$('#prazo').on('click', function() {
		if($('#radio13').is(':checked')){
			$('#pz_aprovacaoVaga').val('480:00');
		}else{
			$('#pz_aprovacaoVaga').val('960:00');
		}
	});

	$('input[type=checkbox]').on('click' ,function() {
	    if(this.checked){
			if(this.id === 'celular' || this.id === 'computador' || this.id === 'computador' || this.id === 'email' || this.id === 'fluig' || this.id === 'protheus'){
				$('#departmentTI').val('true');
			}else if(this.id === 'segurancaTrabalho'){
				$('#equipSeguranca').val('true');
			}else if(this.id === "outros"){
				$('#sectionOutros').show();
			}
		}else{
			$('#departmentTI').val('');
			$('#equipSeguranca').val('');
			$('#sectionOutros').hide();
		}
	});
});

function actionButton(value){
	debugger
	const [id,status] = value.split('-')
	$('#'+id).val(status);
	
    if(status === 'NAO'){
    	$('#'+id+'-SIM').removeClass("btn-success");
		$('#'+id+'-SIM').addClass("btn-default");
		$('#'+id+'-NAO').addClass("btn-danger");
    }else{
		$('#'+id+'-SIM').addClass("btn-success");
		$('#'+id+'-NAO').removeClass("btn-danger");
		$('#'+id+'-NAO').addClass("btn-default");
		$('#'+id+'-SIM').addClass("btn-success");
    }

	status == 'SIM' && id == "Valid2" ? $('#boxCandidato').show() : $('#boxCandidato').hide()
}      

function verLista(){
    window.parent.document.getElementById("tab-attachments").click();
}

/*******************************************
 *SCRIPT PARA CAMPOS OBRIGATÓRIOS
*******************************************/
function validaForms(numState){
	debugger
	var cpVazio = 0;
	var colapses = $('form div');
	for(var x = 0; x < colapses.length;x++){
		if((colapses[x].id).indexOf('seccao') != -1){
			if((colapses[x].style['cssText']).indexOf('block') != -1 || colapses[x].style['cssText'] == ""){
				var idInput = $('#'+colapses[x].id).find('input,select,textarea');
				for(let i of idInput){
					if(colapses[x].id === 'seccao_aprovacao_de_vaga' || colapses[x].id === 'seccao_rh_agenda_entrevista' ||
						 colapses[x].id === 'seccao_analise_de_curriculo'){
							if(!validValue($('#'+i.id).val())){
								$('#'+i.id).parent().addClass("lbobrigat");
								cpVazio++;
						 }else{
							$('#'+i.id).parent().removeClass("lbobrigat");
						 }
					}else{
						if(validValue(i.id)){
							if($('#'+i.id).parent().find('label')[0].innerHTML.indexOf('*') != -1 && !validValue($('#'+i.id).val())){
								$(".lbObriga").addClass("lbobrigat");
								$('#'+i.id).addClass("cpObriga");
								cpVazio++;
							}else{
								$(".lbObriga").removeClass("lbobrigat");
								$('#'+i.id).removeClass("cpObriga");
							}
						}
					}
				}
			}
		}
	}

	if(numState === 1){
		var checksAndRadio = ['tipo','vaga','prazo','escolaridade'] 
		let validBoxs = []
		for(var i = 0;i < checksAndRadio.length;i++ ){
			let box = $('#'+checksAndRadio[i]).find('input')
			validBoxs = []
			for(let x of box ){ 
				$('#'+x.id).is(':checked')?validBoxs.push(true):'';
			}
		 	if(validBoxs.length === 0){
		 		$('#'+checksAndRadio[i]).find('label')[0].style.color = 'red';
		 		cpVazio++;
		 	}else{
				$('#'+checksAndRadio[i]).find('label')[0].style.color = '';
			}
		}
	}

	
	if(numState === 15 && $('#Valid2').val() == 'SIM'){
		if(!validValue($("#nomeAprovado").val()) && !validValue($("#emailAprovado").val()) && !validValue($("#contatoAprovado").val())){
			FLUIGC.toast({
				title: 'Mensagem',
				message: 'Preencher as informações do candidato!',
				type: 'danger'
			});
			return false
		}
	}
	
	if(numState === 19){
		FLUIGC.toast({
			title: 'Mensagem',
			message: 'Essa atividade só pode ser movimentada através do processo de recrutamento!',
			type: 'danger'
		});
		return false
	}
	
	

	if(cpVazio != 0){
		FLUIGC.toast({title: 'Mensagem',message: 'Existem campos obrigatórios que nao foram preenchidos!',type: 'danger'});
		return false;
	}
	return true
}

function validValue(value){
	if(value == "" || value == " " || value == null || value == undefined){
		return false;
	}
	return true;
}

/****************************************
 *SCRIPT PARA ADICIONAR/DELETAR NOVO ITEM
*****************************************/
function addItem(id){
	debugger
	if(id === "expediente"){
		let diasDe = $("#diasDe").val();
		let diasAte = $("#diasAte").val();
		let horaDe = $("#horaDe").val();
		let horaAte = $("#horaAte").val();
		let expediente = $("#expediente").val();
		if(diasDe !== '' && diasAte !== '' && horaDe !== '' && horaAte !== '' && expediente !== ''){
			var indice = wdkAddChild('expedienteColab').toString().trim();
			
			$('#diasDe_I___'+indice).val(diasDe);
			$('#diasDe').val('');
			$('#diasAte_I___'+indice).val(diasAte);
			$('#diasAte').val('');
			$('#horaDe_I___'+indice).val(horaDe);
			$('#horaDe').val('');	
			$('#horaAte_I___'+indice).val(horaAte);
			$('#horaAte').val('');
			$('#expediente_I___'+indice).val(expediente);
			$('#expediente').val('');
		}else{
			FLUIGC.toast({title: 'Mensagem',message: 'Preencher campos!',type: 'danger'});
		}
	}
} 

function hideCollapse(DFAtividade){
	var atividades = [];
	if(DFFormMode === "VIEW"){
		$('.addDoc').hide();
	}else{
		if(DFAtividade == '2' || DFAtividade == '1'){
			atividades.push('seccao_definicao_vaga');
			
		}if(DFAtividade === '8'){
			atividades.push('seccao_definicao_vaga','seccao_aprovacao_de_vaga');
	
		}if(DFAtividade === '10'){
			atividades.push('seccao_definicao_vaga','seccao_aprovacao_de_vaga');
	
		}if(DFAtividade === '15'){
			atividades.push('seccao_definicao_vaga','seccao_aprovacao_de_vaga','seccao_analise_de_curriculo','seccao_ti_separar_ferramentas_de_trabalho');
	
		}if(DFAtividade === '19'){
			atividades.push('seccao_definicao_vaga','seccao_aprovacao_de_vaga','seccao_analise_de_curriculo','seccao_ti_separar_ferramentas_de_trabalho','seccao_rh_agenda_entrevista');
	
		}if(DFAtividade === '27'){
			atividades.push('seccao_definicao_vaga','seccao_aprovacao_de_vaga');
	
		}if(DFAtividade === '76'){
			atividades.push('seccao_programacao_ferias','seccao_aprovacao_periodo','seccao_validacao_do_periodo', 'seccao_gerar_arquivo_de_pagamento','seccao_programacao_do_pagamento','seccao_emitir_comprovante');
			
		}if(DFAtividade === '78'){
			atividades.push('seccao_programacao_ferias','seccao_aprovacao_periodo','seccao_validacao_do_periodo','seccao_gerar_arquivo_de_pagamento','seccao_programacao_do_pagamento','seccao_emitir_comprovante','seccao_recibo_de_ferias');
			
		}if(DFAtividade === '82'){
			atividades.push('seccao_programacao_ferias','seccao_aprovacao_periodo','seccao_validacao_do_periodo','seccao_gerar_arquivo_de_pagamento','seccao_programacao_do_pagamento','seccao_emitir_comprovante','seccao_recibo_de_ferias','seccao_coleta_de_assinatura');
		}if(DFAtividade === '56'){
			atividades.push('seccao_definicao_vaga');
		}
	
		for(var i = 0; i < atividades.length;i++){
			$('#'+atividades[i]).find('input, textarea, select,h3,h4').attr('readonly', 'readonly');
			$('#'+atividades[i]).find('select,button').attr('disabled', true);
			$(':radio:not(:checked)').attr('disabled', true);
			$(":checkbox").attr('readonly', true);
		}
	}

}

function buildExpedienteWork(){
	let deDia   = $( "#diasDe option:selected" ).text();
	let ateDia  = $( "#diasAte option:selected" ).text();
	let horaDe  = $('#horaDe').val();
	let horaAte = $('#horaAte').val();
	$('#expediente').val('De '+ deDia+ ' a ' +ateDia+', das '+horaDe+'h às ' +horaAte+'h');
}





function setSelectedZoomItem(selectedItem) {
	var id = selectedItem.inputId.split("___");
	if (selectedItem.inputId == "C7_FILIAL") {
		var Empresa;
		console.log("------ Atualizando zoom de ID FILIAL --------------");
		let empresa = document.getElementById('empresa_cod2').value = selectedItem['empresa_cod'];
		let fil = document.getElementById('filial_cod2').value = selectedItem['filial_cod'];
		Empresa =  $("#empresa_cod2").val() + ","+ $("#filial_cod2").val();
		// reloadZoomFilterValues("desc_cc",Empresa);
		reloadZoomFilterValues("desc_cc", "B1_EMP,"+ empresa+",B1_FILIAL,"+fil+",DBK_USER,"+idProtheus);
	}
	if (selectedItem.inputId == "desc_cc") {
		var empFil = $("#empresa_cod2").val() + ':' + $("#filial_cod2").val();
		
	}

}