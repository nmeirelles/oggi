function enableFields(form){
    form.setEnabled('solicitante', false);
    form.setEnabled('email_solicitante', false);
    //form.setEnabled('dataEmissao', false);
    
    var ativ = getValue('WKNumState');
    
    if (ativ > 0) {
    	form.setEnabled("departamento", false);
    	form.setEnabled("colaborador", false);
    	form.setEnabled("cargo_atual", false);
    	form.setEnabled("cargo_proposto", false);
    	form.setEnabled("dep_proposto", false);
    	form.setEnabled("salario_novo", false);
		form.setEnabled("horario_atual", false);
		form.setEnabled("horario_novo", false);
		form.setEnabled("dataAlteracao", false);
    }
    	
    if (ativ == 9) {

		form.setEnabled("aprovacao2", false);
    	 	    	 
	} else if (ativ == 22) {
		
		form.setEnabled("aprovacao1", false);
		form.setEnabled("aprovacao2", false);
		
	}
}