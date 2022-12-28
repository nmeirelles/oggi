function displayFields(form,customHTML){
	var nome = fluigAPI.getUserService().getCurrent().getFullName();
    var mail = fluigAPI.getUserService().getCurrent().getEmail();
    var ativ = getValue('WKNumState');
    
    if (ativ == 0) {
   		form.setValue("solicitante", nome);
       	form.setValue("email_solicitante", mail);
    		
   		form.setVisibleById("lg_aprovar_rh", false);
   		form.setVisibleById("fs_aprovar_rh", false);
   		form.setVisibleById("lg_aprovar_dir", false);
   		form.setVisibleById("fs_aprovar_dir", false);
   		form.setVisibleById("lg_alteracao", false);
   		form.setVisibleById("fs_alteracao", false);

    } else if (ativ == 13) {

    	form.setVisibleById("lg_aprovar_rh", false);
     	form.setVisibleById("fs_aprovar_rh", false);
   		form.setVisibleById("lg_alteracao", false);
   		form.setVisibleById("fs_alteracao", false);

     } else if (ativ == 9){
   		form.setVisibleById("lg_alteracao", false);
   		form.setVisibleById("fs_alteracao", false);
    	 
     }
 }