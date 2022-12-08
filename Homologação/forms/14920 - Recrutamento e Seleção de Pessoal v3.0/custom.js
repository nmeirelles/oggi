$(document).ready(function(){

	beforeSendValidate = function(numState, nextState){
		if(nextState === 68){
			var inputs = $('#ferramentas').find('input')
			var saveOptions = []
			for (var i = 0; i < inputs.length; i++) {
				if ($('#' + inputs[i].id).is(":checked")) {
					saveOptions.push(inputs[i].id)
				}
			}
			$('#ferramentasTrabalho').val(saveOptions)
		}
	}

	var totalAnexo = parent.ECM.attachmentTable.getData().length
	if(totalAnexo > 0){
		$('.label-default').empty()
		$('.label-default').append(totalAnexo)
	}

	$('input[type=checkbox]').on('click' ,function(){
		if(this.id === 'outrosFerramentasTrabalho' && this.checked == true) $('#divoutrosFerramentasTrabalho').show(), $('#outroFerramentaTrabalho').val('')
		if(this.id === 'outrosFerramentasTrabalho' && this.checked == false) $('#divoutrosFerramentasTrabalho').hide(), $('#outroFerramentaTrabalho').val('')
		if(this.id === 'outrosAcessos' && this.checked == true) $('#divoutrosAcessos').show(), $('#outroAcesso').val('')
		if(this.id === 'outrosAcessos' && this.checked == false) $('#divoutrosAcessos').hide(), $('#outroAcesso').val('')

		if(this.id === 'segurancaTrabalho' && this.checked == true) $('#atividadeSegTrabalho').val('sim')
		if(this.id === 'segurancaTrabalho' && this.checked == false) $('#atividadeSegTrabalho').val('nao')

		var celular = $('#celular').prop("checked")
		var notebook = $('#notebook').prop("checked")

		if(this.id === 'celular' && this.checked == true) $('#atividadeTI').val('sim')
		if(this.id === 'celular' && this.checked == false && notebook == false) $('#atividadeTI').val('nao')
		if(this.id === 'notebook' && this.checked == true) $('#atividadeTI').val('sim')
		if(this.id === 'notebook' && this.checked == false  && celular == false) $('#atividadeTI').val('nao')

		var carro = $('#carro').prop("checked")
		var cartaoCombustivel = $('#cartaoCombustivel').prop("checked")

		if(this.id === 'carro' && this.checked == true) $('#atividadeFacilities').val('sim')
		if(this.id === 'carro' && this.checked == false && cartaoCombustivel == false) $('#atividadeFacilities').val('nao')
		if(this.id === 'cartaoCombustivel' && this.checked == true) $('#atividadeFacilities').val('sim')
		if(this.id === 'cartaoCombustivel' && this.checked == false && carro == false) $('#atividadeFacilities').val('nao')

	})

	$('input[type=radio]').on('click' ,function(){
		if(this.id === 'radio1') $('#outrosTipoContratacao').hide(),$('#outroTipoContratacao').val('')
		if(this.id === 'radio2') $('#outrosTipoContratacao').hide(),$('#outroTipoContratacao').val('')
		if(this.id === 'radio3') $('#outrosTipoContratacao').hide(),$('#outroTipoContratacao').val('')
		if(this.id === 'radio4') $('#outrosTipoContratacao').hide(),$('#outroTipoContratacao').val('')
		if(this.id === 'radio5') $('#outrosTipoContratacao').show(),$('#outroTipoContratacao').val('')

		if(this.id === 'radio6') $('#aumentoquadro').show(),$('#colaborador').hide(),$('#qtdVaga').val(''),$('#nomeColaborador').val('')
		if(this.id === 'radio7') $('#aumentoquadro').hide(),$('#colaborador').show(),$('#qtdVaga').val(''),$('#nomeColaborador').val('')
		if(this.id === 'radio8') $('#aumentoquadro').hide(),$('#colaborador').show(),$('#qtdVaga').val(''),$('#nomeColaborador').val('')
		if(this.id === 'radio9') $('#aumentoquadro').hide(),$('#colaborador').show(),$('#qtdVaga').val(''),$('#nomeColaborador').val('')

		if(this.id === 'aprovacaoRHSim') $('#candidatoAprovado').show()
		if(this.id === 'aprovacaoRHNao') $('#candidatoAprovado').hide()

		if(this.id === 'ajudaCustoSim') $('#ajudaCusto').show(),$('#valorAjudaCusto').val('')
		if(this.id === 'ajudaCustoNao') $('#ajudaCusto').hide(),$('#valorAjudaCusto').val('')

	})

	let geraFormularioRP = $('#geraFormularioRP')
	geraFormularioRP.on('click', () => {
		console.log('Gera Formulário')
		console.log('Atividade: '+WKNumState)
		exportarDoc()
	})

	let qtdVaga = $('#qtdVaga')
	qtdVaga.on('change', () => { if(qtdVaga.val() < 1) qtdVaga.val(''), FLUIGC.toast({title: 'Atenção: ',message: 'Informar quantidade correta de vaga(s)!',type: 'warning'}) })

	let inserirAprovado = $('#inserirAprovado')
    inserirAprovado.on('click', () => {
		if(WKNumState == '2'){
            let index = wdkAddChild('candidatosAprovados')
			MaskEvent.init()
        }
	})

})
function verLista(){
    window.parent.document.getElementById("tab-attachments").click()
}
function consultaGestor(IDPROTHEUS){
	let c = DatasetFactory.createConstraint("IDPROTHEUS", IDPROTHEUS, IDPROTHEUS, ConstraintType.MUST)
	let ds = DatasetFactory.getDataset("ds_consulta_id", null, [c], null)

	console.log(ds)

	if(ds.values.length > 0) $('#idGestorCentroCusto').val(ds.values[0]['USER_CODE'])
	else FLUIGC.toast({title: 'Atenção: ', message: 'Gestor não encontrado!', type: 'danger'})
}
function setSelectedZoomItem(selectedItem){
	var id = selectedItem.inputId.split("___")
	
	if(selectedItem.inputId == "filial"){
		$("#empresa").val(selectedItem['empresa_cod'].trim())
		$("#codigoFilial").val(selectedItem['filial_cod'].trim())
		var id_protheus_solicitante = $('#id_protheus_solicitante').val()
		reloadZoomFilterValues("centroCusto", "EMPRESA,"+ selectedItem['empresa_cod'].trim()+",FILIAL,"+selectedItem['filial_cod'].trim())
		reloadZoomFilterValues("horarioTrabalho", "EMPRESA,"+ selectedItem['empresa_cod'].trim())
	}
	if(selectedItem.inputId == "centroCusto"){
		var CC = selectedItem['CC'].trim()
		$("#codigoCentroCusto").val(CC)
		
		var IDPROTHEUS = selectedItem['IDPROTHEUS'].trim()
		consultaGestor(IDPROTHEUS)
	}
}
function removedZoomItem(removedItem){
    if(removedItem.inputId == "filial"){
       	$('#empresa').val('')
       	$('#codigoFilial').val('')
       	$('#centroCusto').val('')
       	$('#codigoCentroCusto').val('')

		window['centroCusto'].clear()
		window['horarioTrabalho'].clear()
    }
	if(removedItem.inputId == "centroCusto"){
		$('#codigoCentroCusto').val('')
		$('#idGestorCentroCusto').val('')
 	}
}
function customRemoveChild(oElement){
    if(WKNumState == '2'){
        fnWdkRemoveChild(oElement)
    }
}