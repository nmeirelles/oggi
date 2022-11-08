function ExisteDivergencia(){
    var indexes = hAPI.getChildrenIndexes("pedidos");
    var vlrmax  =0;
    var preco4 = 0;
    
    for (var i = 1; i <= indexes.length; i++) {
        log.info("Teste luana");
        var id = String(hAPI.getCardValue("itemsc4___"+indexes[i])).split("___");
        preco4 = parseFloat( hAPI.getCardValue("#preco4___" + indexes[i]) );
         vlrmax = parseFloat( hAPI.getCardValue("vlrmax___" + id[1]) );
         log.info("Teste1 luana " + preco4 + " = "+ vlrmax);
         if(preco4>vlrmax){
                  log.info("Teste2 luana " + preco4 + " = "+ vlrmax);
            return true;
        }
    }
    return false;
}