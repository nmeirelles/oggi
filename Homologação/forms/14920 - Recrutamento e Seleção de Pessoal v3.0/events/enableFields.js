function enableFields(form){

    var ativ = getValue('WKNumState');

    form.setEnabled("atividadeAtual", false);
    form.setEnabled("numeroProcesso", false);
    form.setEnabled("IdAdmissao", false);

    if(ativ != 0 && ativ != 1 && ativ != 71){
        form.setEnabled("vagaConfidencial", false);
        form.setEnabled("empresa", false);
        form.setEnabled("filial", false);
        form.setEnabled("codigoFilial", false);
        form.setEnabled("centroCusto", false);
        form.setEnabled("codigoCentroCusto", false);
        form.setEnabled("area", false);
        form.setEnabled("nivel", false);
        form.setEnabled("cargo", false);
        form.setEnabled("salarioSugerido", false);
        form.setEnabled("horarioTrabalho", false);
        form.setEnabled("tipo", false);
        form.setEnabled("outroTipoContratacao", false);
        form.setEnabled("vaga", false);
        form.setEnabled("qtdVaga", false);
        form.setEnabled("nomeColaborador", false);
        form.setEnabled("escolaridade", false);
        form.setEnabled("nivelEscolaridade", false);
        form.setEnabled("celular", false);
        form.setEnabled("notebook", false);
        form.setEnabled("segurancaTrabalho", false);
        form.setEnabled("carro", false);
        form.setEnabled("cartaoCombustivel", false);
        form.setEnabled("outrosFerramentasTrabalho", false);
        form.setEnabled("outroFerramentaTrabalho", false);
        form.setEnabled("email", false);
        form.setEnabled("fluig", false);
        form.setEnabled("protheus", false);
        form.setEnabled("abax", false);
        form.setEnabled("outrosAcessos", false);
        form.setEnabled("outroAcesso", false);
        form.setEnabled("compras", false);
        form.setEnabled("refeicaoLocal", false);
        form.setEnabled("vtEstacionamento", false);
        form.setEnabled("convenioMedico", false);
        form.setEnabled("convenioOdontologico", false);
        form.setEnabled("acessoEspelho", false);
        form.setEnabled("atividades", false);
        form.setEnabled("conhecimento", false);
    }

    if(ativ != 95){
        form.setEnabled("aprovacaoGestor", false);
        form.setEnabled("obsGestor", false);
    }

    if(ativ != 68){
        form.setEnabled("decisaoRevisao", false);
        form.setEnabled("salario", false);
        form.setEnabled("obsRevisaoRequisicao", false);
    }
    
    if(ativ != 74){
        form.setEnabled("aprovacaoDiretoria", false);
        form.setEnabled("obsDiretoria", false);
    }

    if(ativ != 2){
        let candidatosAprovados = form.getChildrenIndexes("candidatosAprovados");
        for(let i = 0; i < candidatosAprovados.length; i++){
            form.setEnabled("nomeAprovado___" + candidatosAprovados[i], false);
            form.setEnabled("emailAprovado___" + candidatosAprovados[i], false);
            form.setEnabled("contatoAprovado___" + candidatosAprovados[i], false);
        }
        form.setEnabled("aprovacaoRH", false);
        form.setEnabled("obsRH", false);
    }

    if(ativ != 10){
        form.setEnabled("obsTI", false);
    }

    if(ativ != 56){
        form.setEnabled("obsFacilities", false);
    }

    if(ativ != 91){
        form.setEnabled("obsSegurancaTrabalho", false);
    }

}