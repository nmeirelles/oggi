var beforeSendValidate = function(numState, nextState) {
	debugger
	if(numState == nextState) return ''
		return validaForms(numState)
}

$(document).ready(() =>{
	let date = moment(new Date()).format('YYYY-MM-DD')
	
	$('#C7_EMISSAO').val(date)
	$('#div-btn-attachment').hide()
	hideCollapse(DFAtividade)
	
	if(DFAtividade != 0){
		if($('input[name=radio]:checked').val() == 'meuUser' ) $('#boxFilial').hide()
		let total = []
		var campos = $('input[name^=TOTAL___]')
		
		if(campos.length > 0){
			for(let i of campos){
				let qtd = $('#C7_QUANT___'+i.id.split('___')[1]).val() 
				total.push(parseInt(qtd) * parseFloat(i.value))
			}
			
			$( "#vl_total_unit" ).text(total.reduce((current,total ) => current + total).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
			$("#TX_TOTAL").val(total.reduce((current,total ) => current + total))
		}

		total = []
		campos = $('input[name^=C7_TOTAL___]')
		
		if(campos.length > 0){
			for(let i of campos){
				total.push(parseFloat(i.value))
			}
			
			$( "#vl_total_reem" ).text(total.reduce((current,total ) => current + total).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
			$( "#TX_VLR_REEMB" ).val(total.reduce((current,total ) => current + total));
		}

		
		

		$('#tablist').show()
		$('#panelSolicitacao').show()
	} 
	
	if(DFAtividade == 2 || DFAtividade == 8 || DFAtividade == 14 || DFAtividade == 16 || DFAtividade == 20){
		debugger
		if(DFAtividade == 8 ) $('#relatorioGestor').hide()
		if(DFAtividade == 14 ) $('#relatorioDiretor, #relatorioGestor').hide()
		
		
		$('.colaborador').html($('#TX_SOLICITANTE').val().trim())
		$('.cargo').html($('#TX_CARGO').val())
		$('.empresa').html($('#C7_FILIAL').val().trim())
		$('.motivo').html($('#TX_MOTIVSOLICTA').val().trim())

		$('.banco').html($('#TX_BANCO').val())
		$('.agencia').html($('#TX_AGENCIA').val())
		$('.conta').html($('#TX_CONTA').val())
		$('.cpf').html($('#TX_CPF').val())
		
		$('.valor').html(parseFloat($("#TX_VLR_REEMB").val()).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
		lineReport(DFAtividade)
	}

	if(DFAtividade == 12 || DFAtividade == 14 || DFAtividade == 16 || DFAtividade == 72 || DFAtividade == 73){
		$('#seccao_retorno_protheus').show()
	}else{
		$('#seccao_retorno_protheus').hide()
	}

	if(DFAtividade == 0 || DFAtividade == 4){
		$('#boxInfo').show()
	}


	$('input:radio').change(() => {
		$('#tablist').show()
		$('#panelSolicitacao').show()
		if($('input[name=radio]:checked').val() == "outroUser"){
			$('#isFilial').val('true')
				window['TX_SOLICITANTE'].clear();
				window['C7_COND'].clear();
				window['C7_FILIAL'].clear();
				$('#boxFilial').show()
				$('#TX_BANCO').val("")
				$('#TX_AGENCIA').val("")
				$('#TX_CONTA').val("")
				$('#TX_DIGITO').val("")
				$('#TX_CHPIX').val("")
				$('#showSolicitante').val('true')
				$('#boxSolicitante').show()
		}else{
			$('#showSolicitante').val('false')
			$('#boxFilial').hide()
			$('#isFilial').val('false')
			

			$('#boxSolicitante').hide()
			window['TX_SOLICITANTE'].clear();
			window['C7_COND'].clear();
			$('#TX_BANCO').val("")
			$('#TX_AGENCIA').val("")
			$('#TX_CONTA').val("")
			$('#TX_DIGITO').val("")
			$('#TX_CHPIX').val("")

			if(!validValue(empFil)){
					toast('','Empresa e Filial não cadastradas, entrar em contato com a equipe de T.I','danger')
					$('#tablist').hide()
					$('#panelSolicitacao').hide()
					return false
			}

			if(!validValue(DFCpf)){
					toast('','CPF não encontrado, entrar em contato com a equipe de T.I','danger')
					$('#tablist').hide()
					$('#panelSolicitacao').hide()
					return false
			}

			var constraint = []
			empFil = empFil.replace(/[.,:;-|\/_]/gm,':')
			
			constraint.push(DatasetFactory.createConstraint('EMPFIL',empFil,empFil, ConstraintType.MUST))
			constraint.push(DatasetFactory.createConstraint('CPF',DFCpf,DFCpf, ConstraintType.MUST))

			// DATASET BUSCA NO PROTHEUS AS INFORMAÇÕES DO USUARIO NO PROTHEUS
			var dtsSolicitante = DatasetFactory.getDataset('DTS_REEM_SOLICITANTE', null,constraint, null);

			if(dtsSolicitante.values.length == 0){
					toast('','Validar o cadastro de Participantes no Protheus.','danger')
					$('#tablist').hide()
					$('#panelSolicitacao').hide()
					return false
			}

			var dtsEmpresas = DatasetFactory.getDataset('ds_empresas_protheus', null,null, null);

			if(dtsSolicitante.values && dtsSolicitante.values.length > 0){
				window['TX_SOLICITANTE'].setValue(DFNome);
				
				let cod  = validValue(dtsSolicitante.values[0].A2_COD) ? dtsSolicitante.values[0].A2_COD.trim() : ''
				let loja  = validValue(dtsSolicitante.values[0].A2_LOJA) ? dtsSolicitante.values[0].A2_LOJA.trim() : ''
				let cc  = validValue(dtsSolicitante.values[0].RD0_CC) ? dtsSolicitante.values[0].RD0_CC.trim() : ''
				let cic  = validValue(dtsSolicitante.values[0].RD0_CIC) ? dtsSolicitante.values[0].RD0_CIC.trim() : ''
				let cond  = validValue(dtsSolicitante.values[0].A2_COND) ? dtsSolicitante.values[0].A2_COND.trim() : ''
				let EmpFilial = empFil.split(':')
				let empresa = dtsEmpresas.values.find(val => val.empresa_cod == EmpFilial[0] && val.filial_cod && EmpFilial[1])

				$('#C7_FORNECE').val(cod)
				$('#C7_LOJA').val(loja)
				$('#cod_CC').val(cc)
				$('#TX_CPF').val(cic)
				$('#empresa_cod2').val(EmpFilial[0])
				$('#filial_cod2').val(EmpFilial[1])
				window['C7_FILIAL'].setValue(empresa.empresa_desc)
				window['C7_COND'].setValue(cond)


				let agencia  = validValue(dtsSolicitante.values[0].RA_AGE) ? dtsSolicitante.values[0].RA_AGE : ''
				
				$('#TX_BANCO').val(dtsSolicitante.values[0].RA_BCO.trim())
				$('#TX_AGENCIA').val(agencia)
				$('#TX_CONTA').val(dtsSolicitante.values[0].RA_CTD.trim())
				$('#TX_DIGITO').val(dtsSolicitante.values[0].RA_DCTD.trim())
				$('#TX_CARGO').val(dtsSolicitante.values[0].Q3_DESCSUM.trim())
			}
		}
 	});

	 $('#tipPix').change((event) => {
		$('#TX_CHPIX').removeAttr("readonly")
		if(event.currentTarget.value == "cpf"){
			$('#TX_CHPIX').val('');
			$('#TX_CHPIX').unmask().mask('000.000.000-00', {reverse: true});
			$("#TX_CHPIX").attr("placeholder", '000.000.000-00');
			$("#TX_CHPIX").val($('#TX_CPF').val());
		}else if(event.currentTarget.value == "cnpj"){
			$('#TX_CHPIX').val('');
			$('#TX_CHPIX').unmask().mask("99.999.999/9999-99");
			$("#TX_CHPIX").attr("placeholder", "99.999.999/9999-99");
		}else if(event.currentTarget.value == "cel"){
			$('#TX_CHPIX').val('');
			$('#TX_CHPIX').unmask().mask('(00) 0000-00000');
			$("#TX_CHPIX").attr("placeholder", '(00) 0000-00000');
		}else if(event.currentTarget.value == "email"){
			$('#TX_CHPIX').val('');
			$('#TX_CHPIX').unmask().mask("A", { translation: { "A": { pattern: /[\w@\-.+]/, recursive: true }}});
			$("#TX_CHPIX").attr("placeholder", 'email@email.com.br');
		}
 	});

	 
		var arqcontrol=0;
		// arqcontrol= parent.ECM.attachmentTable.getData().length;
		setInterval(function(){
			if( parent.ECM.attachmentTable.getData().length > 0){
				let returnFiles = parent.ECM.attachmentTable.getData();
					for(let x of returnFiles){
						$('#add_doc_documentos___'+x.description.split('___')[1]).css({'color':'rgb(22, 221, 22)'})
					}
				}
			}, 3000);
	 

});


        
function verLista(){
    window.parent.document.getElementById("tab-attachments").click();
}


function validaForms(numState){
	
	if(numState == 1){
		//Validate inputs Header
		var inputsHeader = ["C7_COND","TX_BANCO","TX_CONTA","TX_DIGITO"]
		if($('input[name="radio"]:checked').val() == "outroUser") inputsHeader.push("TX_SOLICITANTE")
		if($('isFilial').val() == "true") inputsHeader.push("C7_FILIAL")
		let isFilled = true

		for(let z of inputsHeader){
			
			if(!$('#'+z).val() || $('#'+z).val().length == 0){
				if($('#'+z)[0].attributes[2].value != 'zoom'){
					$('#'+z).addClass("cpObriga");
					isFilled = false
				}else{
					$('#'+z).next().addClass("cpObriga")
					isFilled = false
				}
				

			}else{
				if($('#'+z)[0].attributes[2].value != 'zoom'){
					$('#'+z).removeClass("cpObriga");
				}else{
					$('#'+z).next().removeClass("cpObriga")
				}
			}

		}


		// Validate inputs PaiXFilho
		var inputs = ["DT_LANCAMENTO","ZM_DESPESA","C7_QUANT","C7_PRECO"]
		var input = $('input[name^=DT_LANCAMENTO___]')
		

		if(input.length == 0){
			$('#send-modal').click()
			toast('','Deve ser informado reembolso','danger')
			
			return false
		}else if(input.length > 0){
			for(var i = 0; i < input.length;i++){
				for(let x of inputs){
						if(!$('#'+x+'___'+input[i].id.split('___')[1]).val() || $('#'+x+'___'+input[i].id.split('___')[1]).val().length == 0){
							if($('#'+x+'___'+input[i].id.split('___')[1])[0].attributes[0].value == 'text' || $('#'+x+'___'+input[i].id.split('___')[1])[0].attributes[0].value == 'number'){
								$('#'+x+'___'+input[i].id.split('___')[1]).addClass("cpObriga");
								isFilled = false
							}else{
								$('#'+x+'___'+input[i].id.split('___')[1]).next().addClass("cpObriga")
								isFilled = false
							}
							

						}else{
							if($('#'+x+'___'+input[i].id.split('___')[1])[0].attributes[0].value == 'text' || $('#'+x+'___'+input[i].id.split('___')[1])[0].attributes[0].value == 'number'){
								$('#'+x+'___'+input[i].id.split('___')[1]).removeClass("cpObriga");
							}else{
								$('#'+x+'___'+input[i].id.split('___')[1]).next().removeClass("cpObriga")
							}
						}
				}
			}
		}

		if(!isFilled){
			toast('','Preencher campos em vermelho','danger')
		
		}
		return isFilled
	}
	
}
function somaValores(value){
	debugger
	const isCar = ['combustivel','KM','combustível']
	var inputs = $(" input[name^=C7_TOTAL___]")
	let valores = []
	let totalReem = []
	let total;
		
		for(let i of inputs ){
			let index = i.id.split('___')[1]
			let result = $('#C7_QUANT___'+index).val() * $('#TX_VALUNI___'+index).val()
			let preco = $('#C7_PRECO___'+index).val()

			if(preco.indexOf(',') != -1){
					preco = preco.replace(',','')
			}
			
    	if(parseFloat($('#TX_VALUNI___'+index).val()) > parseFloat(preco) || $('#TX_VALUNI___'+index).val() == ""){
				$('#C7_TOTAL___'+index).val(parseFloat(preco))
			}else{
				$('#C7_TOTAL___'+index).val(result)
			}

			if(validValue(i.value)){
				let qtd = $('#C7_QUANT___'+index).val() 
				if(isCar.find(val => val == $('#ZM_DESPESA___'+index).val()[0].trim())){
					total = parseFloat(preco)
					$('#C7_TOTAL___'+index).val(total) 
				}else{
						total = parseFloat(preco) * parseFloat(qtd)
				}
					
				$('#TOTAL___'+index).val(total) 
				

				valores.push(total)
				totalReem.push(parseFloat($('#C7_TOTAL___'+index).val()))
			}
		}

		if(valores.length > 0){
			let total = valores.reduce((current,total ) => current + total)
			let reem = totalReem.reduce((current,total ) => current + total)
		
			$( "#vl_total_unit" ).text('');
			$( "#vl_total_reem" ).text('');
			$( "#TX_TOTAL" ).val(total);
			$( "#TX_VLR_REEMB" ).val(reem);
			$( "#vl_total_unit" ).text(total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
			$( "#vl_total_reem" ).text(reem.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
		}
}

function validValue(value){
	if(value == "" || value == " " || value == null || value == undefined || value == "null" || value == "undefined"){
		return false
	}
	    return true	
}

function addItem(){

	if(!validValue($('#C7_FILIAL').val()[0])){
		toast('','Filial não preenchida!','danger')
		
		return false
	}

	let indice = wdkAddChild('tb_produtos').toString().trim(); 
	$('#C7_PRECO___'+indice).val()
	$('#C7_PRECO___'+indice).mask('#00,##0.00', { reverse: true });
	let empFil = $('#empresa_cod2').val() +':'+$('#filial_cod2').val() 
	
	reloadZoomFilterValues("ZM_DESPESA___"+indice, "EMPFIL," + empFil);

	let date = new Date()
	
		var dtaInicio = FLUIGC.calendar('#DT_LANCAMENTO___'+indice, {
				pickDate: true,
				pickTime: false
		});
		
		dtaInicio.setMaxDate(new Date(moment(date).locale('en-US').format('MMMM DD,YYYY')));
	}

	function setSelectedZoomItem(selectedItem){
		var input = selectedItem.inputId.split("___")
		
		if (input[0] == "ZM_DESPESA"){
			$('#C7_PRODUTO___'+input[1]).val(selectedItem.FLG_XPRODU.trim())
			$('#FLG_CODIGO___'+input[1]).val(selectedItem.FLG_CODIGO.trim())
			if(parseFloat(input[1]) > 1){
				let isValid = validDespesa()
				
				if(!isValid){
					toast('','O item já foi adicionado na quantidade de dias permitidos!','danger')
					window[selectedItem.inputId].clear();
					$('#C7_PRODUTO___'+input[1]).val('')
	
					return false
				}
			}
			let returnInputEdit =  inputEdit(selectedItem['FLG_CODIGO'].trim(),selectedItem['FLG_XPRODU'].trim(),selectedItem['FLG_DESCRI'].trim())

			if(returnInputEdit){
				$('#C7_QUANT___'+input[1]).removeAttr("readonly")
			}else{
				$('#C7_QUANT___'+input[1]).attr("readonly", true);
			}
			let natu = validValue(selectedItem.FLG_XNATUR) ? selectedItem.FLG_XNATUR.trim() : ''
			let valUnit = validValue(selectedItem.FLS_VALUNI) ? selectedItem.FLS_VALUNI : ''
			let conta = validValue(selectedItem.FLG_CONTA) ? selectedItem.FLG_CONTA.trim() : ''


			
			$('#COD_NATU___'+input[1]).val(natu)
			$('#TX_VALUNI___'+input[1]).val(valUnit)
			$('#C7_CONTA___'+input[1]).val(conta)
			var qtd = $('#C7_QUANT___'+input[1]).val()
			
			if(parseFloat(qtd) > 0) $('#C7_TOTAL___'+input[1]).val(parseFloat(qtd) * selectedItem.FLS_VALUNI) 
			let inputs = $('input[name^=C7_TOTAL___]')
			let total = []

			for(let x of inputs){
				let valorReembolso = $('#C7_TOTAL___'+x.id.split('___')[1]).val() 

				total.push(parseFloat(valorReembolso))
			}
			
			// $( "#vl_total_reem" ).text(total.reduce((current,total ) => current + total).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
			$( "#vl_total_reem" ).text(total.reduce((current,total ) => current + total));
			$( "#TX_VLR_REEMB" ).val(total.reduce((current,total ) => current + total));

			$('#C7_PRECO___'+input[1]).removeAttr("readonly")
			
			
		}else if (input[0] == "C7_FILIAL"){
			$('#empresa_cod2').val(selectedItem.empresa_cod.trim())
			$('#filial_cod2').val(selectedItem.filial_cod.trim())
			$('#C7_FILENT').val(selectedItem.filial_cod.trim())
			let empFil = selectedItem.empresa_cod.trim()+':'+selectedItem.filial_cod.trim()
			reloadZoomFilterValues("TX_SOLICITANTE", "EMPFIL," + empFil);
		}else if(input[0] == "C7_COND"){
			$('#COD_COND').val(selectedItem.Id.trim())
		}else if (input[0] == "TX_SOLICITANTE"){
			$('#C7_FORNECE').val(selectedItem.A2_COD.trim())
			
			$('#C7_LOJA').val(selectedItem.A2_LOJA.trim())
			$('#cod_CC').val(selectedItem.RD0_CC.trim())
			$('#TX_CARGO').val(selectedItem.Q3_DESCSUM.trim())
			$('#TX_CPF').val(selectedItem.RD0_CIC.trim())


			let banco  = validValue(selectedItem.RA_BCO) ? selectedItem.RA_BCO.trim() : ''
			let agencia  = validValue(selectedItem.RA_AGE) ? selectedItem.RA_AGE.trim() : ''
			let conta  = validValue(selectedItem.RA_CTD) ? selectedItem.RA_CTD.trim() : ''
			let digito  = validValue(selectedItem.RA_DCTD) ? selectedItem.RA_DCTD.trim() : ''
			

			$('#TX_BANCO').val(banco)
			$('#TX_AGENCIA').val(agencia)
			$('#TX_CONTA').val(conta)
			$('#TX_DIGITO').val(digito)
			$('#TX_CARGO').val(selectedItem.Q3_DESCSUM.trim())
			window['C7_COND'].setValue(selectedItem.A2_COND.trim())
			$('#COD_COND').val(selectedItem.A2_COND.trim())
		}
	}

	function removedZoomItem(removedItem) {
		var input = removedItem.inputId.split("___")
		if (input[0] == "ZM_DESPESA"){
			
			$('#COD_NATU___'+input[1]).val("")
			$('#C7_PRODUTO___'+input[1]).val("")
			$('#TX_VALUNI___'+input[1]).val("")
			$('#C7_PRECO___'+input[1]).val("")
			$('#TOTAL___'+input[1]).val("")
			$('#C7_TOTAL___'+input[1]).val("")	
		}else if(input[0] == "TX_SOLICITANTE"){
			window['C7_COND'].clear();
			$('#TX_BANCO').val("")
			// $('#TX_AGENCIA').val("")
			$('#TX_CONTA').val("")
			$('#TX_DIGITO').val("")
			$('#TX_CHPIX').val("")
			
		}
	}

	function addFiles(value){
		value = value.id.split('___')
		let nameFile = $('#ZM_DESPESA___'+value[1]).val()
	
		if(nameFile.length > 0){
			var name;
			nameFile[0].indexOf(' ') > 0 ? name = nameFile[0].replace(' ','_') : name =nameFile[0]
		}else{
			name = 'reembolso'
		}
				

		JSInterface.showCamera(name+'___'+value[1])
	}

	function hideCollapse(DFAtividade){
		var atividades = []
		if(DFFormMode === "VIEW"){
			$('.addDoc').hide()
		}else{
			if(DFAtividade === '2'){
				atividades.push('seccao_solicitante')
		
			}if(DFAtividade === '8'){
				atividades.push('seccao_solicitante','seccao_aprovacao_gestor')
		
			}if(DFAtividade === '14'){
				atividades.push('seccao_solicitante','seccao_aprovacao_gestor','seccao_aprovacao_diretor')
		
			}if(DFAtividade === '16'){
				atividades.push('seccao_solicitante','seccao_aprovacao_gestor','seccao_aprovacao_diretor','seccao_impressao_despesas')
		
			}
		
			for(var i = 0; i < atividades.length;i++){
				$('#'+atividades[i]).find('input, textarea, select,h3,h4').attr('readonly', 'readonly');
				$('#'+atividades[i]).find('select,button').attr('disabled', true)
				$(':radio:not(:checked)').attr('disabled', true);
				$(":checkbox").attr('disabled', true);
			}
		}
	
	}

	function lineReport(DFAtividade){
		var idHeader;
		if(DFAtividade == 2){
			idHeader = 'HeaderGestor'
		}else if(DFAtividade == 8){
			idHeader = 'HeaderDiretor'
		}else{
			idHeader = 'HeaderDespesas'
		} 
		
		
		
		debugger
		let inputs = ["DT_LANCAMENTO","ZM_DESPESA","TOTAL","C7_TOTAL"]
		let input = $('input[name^=DT_LANCAMENTO___]')
		let valueLine = {}
		let	line = []

				for(var i = 0; i < input.length;i++){
						for(let x of inputs){
							let valor = $('#'+x+'___'+input[i].id.split('___')[1]).val()
							valueLine[x] = typeof(valor) == 'object' ? valor[0].toString() : valor
					}

									$(`	
									<tr height=24 style='mso-height-source:userset;height:18.0pt'>
										<td height=24 class=xl65 style='height:18.0pt'>&nbsp;</td>
										<td class=xl171 style='border-top:none'>
											${valueLine['DT_LANCAMENTO']}
									 	</td>
										<td colspan=4 class=xl113 style='border-right:1.0pt solid black;border-left:none'>
											${valueLine['ZM_DESPESA']}
									 	</td>
									 	<td class=xl167 width=181 style='border-top:none;border-left:none;width:136pt'>
										 	${$('#cod_CC').val()}
									 	</td>
									 	<td class=xl112 width=133 style='border-top:none;width:100pt'>
										 	${valueLine['ZM_DESPESA']}
									 	</td>
										<td class=xl112 width=138 style='border-top:none;border-left:none;width:104pt'>
											${ (parseFloat(valueLine['TOTAL']).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))}
									 	</td>
										<td class=xl111 style='border-top:none;border-left:none'>
											${ (parseFloat(valueLine['C7_TOTAL']).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))}
									 	</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
										<td class=xl75>&nbsp;</td>
										<td class=xl71>&nbsp;</td>
										<td class=xl72></td>
										<td class=xl65>&nbsp;</td>
										<td class=xl65>&nbsp;</td>
								 </tr>`).insertAfter('#'+idHeader);
									valueLine = {}
				
				}
	}

	function validDespesa(){
		debugger
			let inputs = $('select[name^=ZM_DESPESA___]')
			let oInputs = []
			const filial = $('#C7_FILIAL').val()[0]
			
				for(let x of inputs){
					
				let cod = 	$('#C7_PRODUTO___'+x.id.split('___')[1]).val()
				let dtLancamento = 	$('#DT_LANCAMENTO___'+x.id.split('___')[1]).val()
				let FLG_CODIGO = 	$('#FLG_CODIGO___'+x.id.split('___')[1]).val()
				
				
					oInputs.push({
						id:dtLancamento+cod+x.value.trim(),
						data:dtLancamento,
						codigo:cod,
						FLG_CODIGO:FLG_CODIGO,
						name:x.value.trim()
					})				
				}

				var ids = oInputs.map(val => val.id)
				var newArray = ids.filter((este, i) => ids.indexOf(este) === i)
			
				for(let c of newArray){
					var returnQtd = oInputs.filter(val => val.id == c)

					if(returnQtd.length > 0){
						
						let dtsDespesas = DatasetFactory.getDataset('DTS_VAL_DESPESAS', null, null, null);
						
						despesaFind = dtsDespesas.values.find(val => {
								if(val['txt_codDespesa_I'].trim() == returnQtd[0].FLG_CODIGO && val['txt_codProd_I'].trim() == returnQtd[0].codigo 
										&& val['ZM_DESPESA_I'].trim() == returnQtd[0].name.trim() ){
									return val
								}
							})

							if(despesaFind == undefined){
								despesaFind = dtsDespesas.values.find(val => {
									if(val['ZM_DESPESA_I'].trim() == 'DESPESA GENERICA' && val['C7_FILIAL_I'].trim() == filial){
										return val
									}
								})
							}

							if(validValue(despesaFind)){
								if(returnQtd.length > parseFloat(despesaFind.txt_MaxValue_I)){
									return false
								}							
							}
							
					}
				}
				return true
	}

	function deleteTabela(tb){
		fnWdkRemoveChild(tb);
	}

	function inputEdit(codDespesa,codProd,despesa){
		debugger
		const filial = $('#C7_FILIAL').val()[0]
		let dtsDespesas = DatasetFactory.getDataset('DTS_VAL_DESPESAS', null, null, null);
						
		despesaFind = dtsDespesas.values.find(val => {
			if(val['txt_codDespesa_I'].trim() == codDespesa && val['txt_codProd_I'].trim() == codProd 
					&& val['ZM_DESPESA_I'].trim() == despesa 		&& val['C7_FILIAL_I'].trim() == filial){
				return val
			}
		})

		if(despesaFind == undefined){
			despesaFind = dtsDespesas.values.find(val => {
				if(val['ZM_DESPESA_I'].trim() == 'DESPESA GENERICA'){
					return val
				}
			})
		}

		if(despesaFind == undefined) return false
		return despesaFind.editavel_I == 'sim' ? true : false
	}

	function pdfDownload(id){
			html2canvas($("#"+id.id), {
				onrendered: function (canvas) {
					var imgData = canvas.toDataURL('image/png');  
					var doc = new jsPDF('landscape');
					doc.addImage(imgData, 'PNG', 5, 5);
					doc.save('reembolso-despesas.pdf');
				}
			});
	}

	function validDate(value){
			var data = convertToData(moment());
			var digitado = convertToData(moment(value.value,'DD/MM/YYYY').format("YYYY-MM-DD"))
			if (digitado.getTime() > data.getTime()) {
				toast('','Data não pode ser maior que a data atual','danger')
				$("#"+value.id).val('');
			}
		
	}

	function convertToData(data) {
		const date = moment(data, 'YYYY-MM-DD');
		return date.toDate();
	}

	function toast(title,message,type){
		FLUIGC.toast({
			title: title,
			message: message,
			type: type
		});
	}
