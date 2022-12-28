function exportarDoc() {

    var fluigLoading = FLUIGC.loading('#content', {
        cursorReset: 'default',
        baseZ: 1000,
        centerX: true,
        centerY: true,
        bindEvents: true,
        fadeIn: 200,
        fadeOut: 400,
        timeout: 0,
        showOverlay: true,
        onBlock: null,
        onUnblock: null,
        ignoreIfBlocked: false
    })
    
    var origem = window.location.origin
    var pastaGED = ""
        
    var tipoDoc = "Requisicao_Pessoal.docx"
    var extensaoDoArq = '.docx'      
    
    if(origem == "https://sogelo137933.fluig.cloudtotvs.com.br:1600") pastaGED = "15509" 
    else if(origem == "https://sogelo.fluig.cloudtotvs.com.br") pastaGED = "118349"

    var consultaDocGed = docGED(pastaGED, tipoDoc)
    var file = consultaDocGed.file
    dadosDoc.versaoDoc = '' + consultaDocGed.versao

    var salario = $("#salario").val()
    if(dadosDoc.salario == '') dadosDoc.salario = salario

    var obs = $("#obsRevisaoRequisicao").val()
    if(dadosDoc.obs == '') dadosDoc.obs = obs

    if(dadosDoc.tipoContratacao == 'indeterminadoCLT') dadosDoc.tipoContratacao = 'Prazo Indeterminado (CTL)'
    if(dadosDoc.tipoContratacao == 'determinadoCLT') dadosDoc.tipoContratacao = 'Prazo Determinado (CLT)'
    if(dadosDoc.tipoContratacao == 'aprendiz') dadosDoc.tipoContratacao = 'Aprendiz'
    if(dadosDoc.tipoContratacao == 'estagio') dadosDoc.tipoContratacao = 'Estagiário'

    if(dadosDoc.tipoVaga == 'aumentoquadro') dadosDoc.tipoVaga = 'Aumento de Quadro'
    if(dadosDoc.tipoVaga == 'substituicao') dadosDoc.tipoVaga = 'Substituição'
    if(dadosDoc.tipoVaga == 'afastamento') dadosDoc.tipoVaga = 'Afastamento'
    if(dadosDoc.tipoVaga == 'promocao') dadosDoc.tipoVaga = 'Promoção / Transferência'

    if(dadosDoc.escolaridade == 'tecnico') dadosDoc.escolaridade = 'Técnico'
    if(dadosDoc.escolaridade == 'fundamental') dadosDoc.escolaridade = 'Ensino Fundamental'
    if(dadosDoc.escolaridade == 'medio') dadosDoc.escolaridade = 'Ensino Médio'
    if(dadosDoc.escolaridade == 'superior') dadosDoc.escolaridade = 'Ensino Superior'
    if(dadosDoc.escolaridade == 'graduacao') dadosDoc.escolaridade = 'Pós-Graduação'
    if(dadosDoc.escolaridade == 'mestrado') dadosDoc.escolaridade = 'Mestrado'
    if(dadosDoc.escolaridade == 'doutorado') dadosDoc.escolaridade = 'Doutorado'

    dadosDoc.beneficios = dadosDoc.beneficios.slice(0, dadosDoc.beneficios.length - 1)
    dadosDoc.tecnologiaInformacao = dadosDoc.tecnologiaInformacao.slice(0, dadosDoc.tecnologiaInformacao.length - 1)

    // var candidatosAprovados = $('#candidatosAprovados tbody tr')
    // for(var i = 0; i < candidatosAprovados.lengt; i++){
    //     var candidato = candidatosAprovados[i]
    //     console.log(candidato)
    // }

    var nomeDoc = 'Requisição de Pessoal'

    fluigLoading.show()
    setTimeout(function() {
        gerarDocumentos(dadosDoc, nomeDoc, file, extensaoDoArq, fluigLoading)
    }, 1000)
}

function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback)
}

function gerarDocumentos(dados, nomeDoc, file, extensaoDoArquivoDonwload, fluigLoading) {
    loadFile(file, function (error, content) {
        fluigLoading.show()
        if (error) {
            throw error
        }
        var zip = new PizZip(content)
        var doc = new window.docxtemplater().loadZip(zip)
        doc.setData(dados)
        try {
            doc.render()
        } catch (error) {
            var e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties,
            }
            console.log(JSON.stringify({
                error: e
            }))
            throw error
        }
        var out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        })
        if (extensaoDoArquivoDonwload == '.pdf') {
            var formData = new FormData()
            formData.append('File', out, nomeDoc + '.docx')
            fluigLoading.show()
            $.ajax({
            	url: 'https://v2.convertapi.com/convert/docx/to/pdf?Secret=RnGrOawf866y4IPH',
                data: formData,
                processData: false,
                contentType: false,
                method: 'POST',
                success: function (data) {
                    var linkSource = "data:application/pdf;base64," + data.Files[0].FileData
                    var downloadLink = document.createElement("a")
                    var fileName = nomeDoc + extensaoDoArquivoDonwload
                    downloadLink.href = linkSource
                    downloadLink.download = fileName
                    downloadLink.click()
                    fluigLoading.show()
                    anexaDoc = data.Files[0].FileData
                }
            })
        } else {
            saveAs(out, nomeDoc + extensaoDoArquivoDonwload)
            fluigLoading.show()
        }

        fluigLoading.show()

    })
    setInterval(() => {
        fluigLoading.hide()
    }, 100)
}

function docGED(pastaPai, tipoDoc) {
    var origem = window.location.origin
    var docGED = {
        versao: '',
        file: ''
    }
    $.ajax({
        type: "get",
        dataType: 'json',
        url: origem + '/api/public/ecm/document/listDocumentWithChildren/' + pastaPai,
        async: false,
        contentType: 'application/json; charset=utf-8',
    }).done(function(data) {
        for (var i = 0; i < data.content[0].children.length; i++) {
            if (data.content[0].children[i].description == tipoDoc) {
                var idDoc = data.content[0].children[i].id
                docGED.versao = data.content[0].children[i].version
                $.ajax({
                    async: false,
                    type: "GET",
                    dataType: 'json',
                    url: origem + '/api/public/2.0/documents/getDownloadURL/' + idDoc,
                }).done(function(doc) {
                    docGED.file = doc.content
                })
            }
        }
    })
    return docGED
}