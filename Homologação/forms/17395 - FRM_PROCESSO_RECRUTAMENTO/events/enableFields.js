function enableFields(form){ 
  var ativ = getValue('WKNumState');

  if(ativ != 0 && ativ != 4){
    form.setEnabled("celular", false);
    form.setEnabled("computador", false);
    form.setEnabled("email", false);
    form.setEnabled("fluig", false);
    form.setEnabled("segurancaTrabalho", false);
    form.setEnabled("abax", false);
    form.setEnabled("protheus", false);
  }
}