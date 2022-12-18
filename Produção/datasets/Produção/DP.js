function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
       
    //Cria as colunas
    dataset.addColumn("ID");
    dataset.addColumn("DESCRICAO");
      
    //Cria os registros
    dataset.addRow(new Array("01", "ALMOXARIFADO MAT PRIMA / EMBALAGENS"));
    dataset.addRow(new Array("02", "CAMARA FRIA"));
    dataset.addRow(new Array("03", "COMERCIAL"));
    dataset.addRow(new Array("04", "CONTROLADORIA"));
    dataset.addRow(new Array("05", "COPOS E CONES"));
    dataset.addRow(new Array("06", "ESTOQUE"));
    dataset.addRow(new Array("07", "EXPANSAO"));
    dataset.addRow(new Array("08", "EXPEDICAO"));
    dataset.addRow(new Array("09", "EXTRUSADO"));
    dataset.addRow(new Array("10", "FACILITIES"));
    dataset.addRow(new Array("11", "FINANCEIRO"));
    dataset.addRow(new Array("12", "FISCAL"));
    dataset.addRow(new Array("13", "FRANQUIAS"));
    dataset.addRow(new Array("14", "GERÊNCIA FÁBRICA"));
    dataset.addRow(new Array("15", "IMPLANTACAO"));
    dataset.addRow(new Array("16", "JURIDICO"));
    dataset.addRow(new Array("17", "LIMPEZA E HIGIENIZACAO ESCRITORIO"));
    dataset.addRow(new Array("18", "LIMPEZA E HIGIENIZACAO INDUSTRIAL"));
    dataset.addRow(new Array("19", "LINHA MASSA"));
    dataset.addRow(new Array("20", "LOGISTICA"));
    dataset.addRow(new Array("21", "MANUTENCAO FREEZERS"));
    dataset.addRow(new Array("22", "MANUTENCAO INDUSTRIAL"));
    dataset.addRow(new Array("23", "MANUTENCAO PREDIAL"));
    dataset.addRow(new Array("24", "MARKETING"));
    dataset.addRow(new Array("25", "OPERACOES DE AUTO SERVICO"));
    dataset.addRow(new Array("26", "PASTEURIZACAO E SABORIZACAO"));
    dataset.addRow(new Array("27", "PCP"));
    dataset.addRow(new Array("28", "Pesquisa e Desenvolvimento"));
    dataset.addRow(new Array("29", "PICOLES MOLDADOS"));       
    dataset.addRow(new Array("30", "PORTARIA"));
    dataset.addRow(new Array("31", "PROCESSOS"));    
    dataset.addRow(new Array("32", "PRODUCAO GELO"));
    dataset.addRow(new Array("33", "QUALIDADE ASSEGURADA"));
    dataset.addRow(new Array("34", "RECURSOS HUMANOS"));
    dataset.addRow(new Array("35", "SEGURANCA DO TRABALHO"));
    dataset.addRow(new Array("36", "SUPRIMENTOS"));
    dataset.addRow(new Array("37", "TELEFONIA"));
    dataset.addRow(new Array("38", "TI"));
    dataset.addRow(new Array("39", "TRANSPORTE FINAL"));
    dataset.addRow(new Array("40", "TRANSPORTE PRIMARIO"));
    dataset.addRow(new Array("41", "UTILIDADES"));
    dataset.addRow(new Array("42", "SALA DE MAQUINAS"));
    dataset.addRow(new Array("43", "GERÊNCIA LOGÍSTICA"));
       
    
    
    return dataset;
}