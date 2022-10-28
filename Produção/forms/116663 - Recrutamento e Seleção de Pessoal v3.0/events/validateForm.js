function validateForm(form){
    var WKNumState = Number(getValue("WKNumState"));
    var WKNextState = getValue("WKNextState");
    var msgErro = "";
    
    if(WKNumState == 0 || WKNumState == 1 || WKNumState == 71){
        if(campoVazio(form,"vagaConfidencial")) msgErro += "<li>É necessário informar <b>VAGA CONFIDENCIAL</b>.</li>";
        if(campoVazio(form,"filial")) msgErro += "<li>É necessário informar a <b>FILIAL</b>.</li>";
        if(campoVazio(form,"centroCusto")) msgErro += "<li>É necessário informar o <b>CENTRO CUSTO</b>.</li>";
        if(campoVazio(form,"nivel")) msgErro += "<li>É necessário informar o <b>NÍVEL</b>.</li>";
        if(campoVazio(form,"cargo")) msgErro += "<li>É necessário informar o <b>CARGO</b>.</li>";
        if(campoVazio(form,"salarioSugerido")) msgErro += "<li>É necessário informar o <b>SALÁRIO</b>.</li>";
        if(campoVazio(form,"horarioTrabalho")) msgErro += "<li>É necessário informar o <b>HORÁRIO TRABALHO</b>.</li>";
        if(campoVazio(form,"tipo")) msgErro += "<li>É necessário informar o <b>TIPO CONTRATAÇÃO</b>.</li>";
        if(form.getValue('tipo') == 'outrosTipoContratacao' && campoVazio(form,"outroTipoContratacao")) msgErro += "<li>É necessário informar o <b>OUTRO</b>.</li>";
        if(campoVazio(form,"vaga")) msgErro += "<li>É necessário informar o <b>TIPO VAGA</b>.</li>";
        if(form.getValue('vaga') == 'aumentoquadro' && campoVazio(form,"qtdVaga")) msgErro += "<li>É necessário informar a <b>QUANTIDADE</b>.</li>";
        if(form.getValue('vaga') != 'aumentoquadro' && form.getValue('vaga') != '' && campoVazio(form,"nomeColaborador")) msgErro += "<li>É necessário informar o <b>NOME DO COLABORADOR</b>.</li>";
        if(campoVazio(form,"escolaridade")) msgErro += "<li>É necessário informar a <b>ESCOLARIDADE</b>.</li>";
        if( 
            campoVazio(form,"celular") && 
            campoVazio(form,"notebook") && 
            campoVazio(form,"segurancaTrabalho") && 
            campoVazio(form,"carro") && 
            campoVazio(form,"cartaoCombustivel") && 
            campoVazio(form,"outrosFerramentasTrabalho")

        ) msgErro += "<li>É necessário informar a(s) <b>FERRAMENTA(S) TRABALHO</b>.</li>";
        if(form.getValue('outrosFerramentasTrabalho') == 'on' && campoVazio(form,"outroFerramentaTrabalho")) msgErro += "<li>É necessário informar o <b>OUTRO</b>.</li>";
        if( 
            campoVazio(form,"email") && 
            campoVazio(form,"fluig") && 
            campoVazio(form,"protheus") && 
            campoVazio(form,"abax") && 
            campoVazio(form,"outrosAcessos")

        ) msgErro += "<li>É necessário informar o(s) <b>ACESSO(S)</b>.</li>";
        if(form.getValue('outrosAcessos') == 'on' && campoVazio(form,"outroAcesso")) msgErro += "<li>É necessário informar o <b>OUTRO</b>.</li>";
        if(campoVazio(form,"acessoEspelho")) msgErro += "<li>É necessário informar o <b>ACESSO ESPELHO</b>.</li>";
        if(campoVazio(form,"atividades")) msgErro += "<li>É necessário informar a(s) <b>ATIVIDADE(S)</b>.</li>";
        if(campoVazio(form,"conhecimento")) msgErro += "<li>É necessário informar o(s) <b>CONHECIMENTO(S)</b>.</li>";
    }

    if(WKNumState == 68){
        if(campoVazio(form,"decisaoRevisao")) msgErro += "<li>É necessário informar a <b>APROVAÇÃO</b>.</li>";
        if(campoVazio(form,"obsRevisaoRequisicao")) msgErro += "<li>É necessário informar as <b>OBSERVAÇÕES</b>.</li>";
    }

    if(WKNumState == 74){
        if(campoVazio(form,"aprovacaoDiretoria")) msgErro += "<li>É necessário informar a <b>APROVAÇÃO</b>.</li>";
        if(campoVazio(form,"obsDiretoria")) msgErro += "<li>É necessário informar as <b>OBSERVAÇÕES</b>.</li>";
    }

    if(WKNumState == 2){
        if(campoVazio(form,"aprovacaoRH")) msgErro += "<li>É necessário informar a <b>APROVAÇÃO</b>.</li>";
        if(form.getValue('aprovacaoRH') == 'aprovado'){
            let candidatosAprovados = form.getChildrenIndexes("candidatosAprovados");
            if(candidatosAprovados.length < 1) msgErro += "<li>É necessário informar no mínimo 01 candidato.</li>";
            for(let i = 0; i < candidatosAprovados.length; i++){
                if(campoVazio(form,"nomeAprovado___" + candidatosAprovados[i])) msgErro += "<li>É necessário informar o <b>NOME</b>: " + (i + 1) + ".</li>";
                if(campoVazio(form,"emailAprovado___" + candidatosAprovados[i])) msgErro += "<li>É necessário informar o <b>EMAIL</b>: " + (i + 1) + ".</li>";
                if(campoVazio(form,"contatoAprovado___" + candidatosAprovados[i])) msgErro += "<li>É necessário informar o <b>TELEFONE</b>: " + (i + 1) + ".</li>";
            }
        }
        if(campoVazio(form,"obsRH")) msgErro += "<li>É necessário informar as <b>OBSERVAÇÕES</b>.</li>";
    }

    if(WKNumState == 10){
        if(campoVazio(form,"obsTI")) msgErro += "<li>É necessário informar as <b>OBSERVAÇÕES</b>.</li>";
    }

    if(WKNumState == 56){
        if(campoVazio(form,"obsFacilities")) msgErro += "<li>É necessário informar as <b>OBSERVAÇÕES</b>.</li>";
    }

    if(WKNumState == 91){
        if(campoVazio(form,"obsSegurancaTrabalho")) msgErro += "<li>É necessário informar as <b>OBSERVAÇÕES</b>.</li>";
    }
    
    if(msgErro != ""){
        msgErro = "<ul>" + msgErro + "</ul>";
        exibirMensagem(form, "Favor informar os campos <b>obrigatórios:</b><br/>"+msgErro);
    }
}
function campoVazio(form, fieldname){
    if(form.getValue(fieldname) == null || form.getValue(fieldname) == undefined || form.getValue(fieldname).trim() == "") return true;
    else return false;
}

function exibirMensagem(form, mensagem){
    var mobile = form.getMobile() != null && form.getMobile();
    if (mobile) {
        throw mensagem;
    } else {
        throw   "<div class='alert alert-warning' role='alert'>" +
                    "<strong>Atenção:</strong> "+mensagem+
                "</div>";
    }
}