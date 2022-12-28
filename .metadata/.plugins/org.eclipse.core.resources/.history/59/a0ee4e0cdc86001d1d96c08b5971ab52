function enableFields(form){ 
	var atividadeAtual = getValue('WKNumState'); 
	if (atividadeAtual !=5){
		var indexes = form.getChildrenIndexes("pedidos");	
		for (var i=0; i<indexes.length; ++i){ 
			form.setEnabled("ckbox___"+indexes[i], false);	 
		}
	}
   	task = parseInt(getValue("WKNumState"));
	switch(task){
		case 0 : 
			form.setEnabled("pedido_protheus",false);
			form.setEnabled("nfprotheus",false);
		break;
		
		case INICIO :
			form.setEnabled("pedido_protheus",false);
			form.setEnabled("nfprotheus",false);
			form.setEnabled("urgente",false);
		break;
	
		case APROVARSOLICITACAO :
			var indexes = form.getChildrenIndexes("pedidos");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("cc___"+indexes[i], false);
				form.setEnabled("desc_cc___"+indexes[i], false);
				form.setEnabled("conprod___"+indexes[i], false); 
				form.setEnabled("obs___"+indexes[i], false);
				form.setEnabled("quantidade___"+indexes[i], false);
				form.setEnabled("ckbox___"+indexes[i], false);
				form.setEnabled("codproduto___"+indexes[i], false);
				form.setEnabled("entrega___"+indexes[i], false);
				form.setEnabled("necessidade___"+indexes[i], false);
				form.setEnabled("desc_contabil___"+indexes[i], false);
				form.setEnabled("dataorcamento___"+indexes[i],false);
			}
			form.setEnabled("filial",false);

			form.setEnabled("empresa",false);
			form.setEnabled("urgente",false);
			form.setEnabled("pedido_protheus",false);
			form.setEnabled("nfprotheus",false);
			form.setEnabled("pg_ant",false);
		break;
		
		case RESOLVERPROBLEMA :
			
		break;
		
		case SERVICO :
			
		break;
		
		case COTACAO :
			
			form.setEnabled("aprovarsolicitacao", false);
			form.setEnabled("solicitacao_protheus",true);
			form.setEnabled("aporvacao", false);
			form.setEnabled("empresa", false);
			form.setEnabled("urgente", false);
			form.setEnabled("filial",false);
			form.setEnabled("aprovado",false);
			form.setEnabled("motivo",false);
			form.setEnabled("pedido_protheus",false);
			form.setEnabled("nfprotheus",false);
			form.setEnabled("pg_ant",false);
			
			var indexes = form.getChildrenIndexes("pedidos");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("cc___"+indexes[i], false);
				form.setEnabled("desc_cc___"+indexes[i], false);
				form.setEnabled("conprod___"+indexes[i], false); 
				form.setEnabled("obs___"+indexes[i], false);
				form.setEnabled("quantidade___"+indexes[i], false);
				form.setEnabled("ckbox___"+indexes[i], false);
				form.setEnabled("codproduto___"+indexes[i], false);
				form.setEnabled("entrega___"+indexes[i], false);
				form.setEnabled("necessidade___"+indexes[i], false);
				form.setEnabled("desc_contabil___"+indexes[i], false);
				form.setEnabled("dataorcamento___"+indexes[i],false);
			}
		break;
		
		case APROVARCOTACAO :

			var indexes = form.getChildrenIndexes("pedidos");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("cc___"+indexes[i], false);
				form.setEnabled("desc_cc___"+indexes[i], false);
				form.setEnabled("conprod___"+indexes[i], false); 
				form.setEnabled("obs___"+indexes[i], false);
				form.setEnabled("quantidade___"+indexes[i], false);
				form.setEnabled("ckbox___"+indexes[i], false);
				form.setEnabled("codproduto___"+indexes[i], false);
				form.setEnabled("entrega___"+indexes[i], false);
				form.setEnabled("necessidade___"+indexes[i], false);
				form.setEnabled("desc_contabil___"+indexes[i], false);
				form.setEnabled("dataorcamento___"+indexes[i],false);
			}
			var c1 = form.getChildrenIndexes("cotacao1");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("escolhido1___"+c1[i], false);
				form.setEnabled("preco1___"+c1[i], false);
				form.setEnabled("unidade1___"+c1[i], false);
				form.setEnabled("quantidade1___"+c1[i], false);
				form.setEnabled("ipi1___"+c1[i], false);
			}
			var c2 = form.getChildrenIndexes("cotacao2");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("escolhido2___"+c1[i], false);
				form.setEnabled("preco2___"+c1[i], false);
				form.setEnabled("unidade2___"+c1[i], false);
				form.setEnabled("quantidade2___"+c1[i], false);
				form.setEnabled("ipi2___"+c1[i], false);
			}
			var c3 = form.getChildrenIndexes("cotacao3");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("escolhido3___"+c1[i], false);
				form.setEnabled("preco3___"+c1[i], false);
				form.setEnabled("unidade3___"+c1[i], false);
				form.setEnabled("quantidade3___"+c1[i], false);
				form.setEnabled("ipi3___"+c1[i], false);
			}
			form.setEnabled("filial",false);
			form.setEnabled("empresa",false);
			form.setEnabled("urgente",false);
			form.setEnabled("aprovado",true);
			form.setEnabled("motivo",true);
			form.setEnabled("nfprotheus",false);
			form.setEnabled("aprovarsolicitacao",false);
			form.setEnabled("solicitacao_protheus",false);
			form.setEnabled("pedido_protheus",false);
			form.setEnabled("vencimento",false);
			form.setEnabled("frete1", false);
			form.setEnabled("frete2", false);
			form.setEnabled("frete3", false);
			form.setEnabled("prazo1", false);
			form.setEnabled("prazo2", false);
			form.setEnabled("prazo3", false);
			form.setEnabled("pg_ant1",false);
			form.setEnabled("pg_ant2",false);
			form.setEnabled("pg_ant3",false);
			form.setEnabled("COND1",false);
			form.setEnabled("COND2",false);
			form.setEnabled("COND3",false);
			form.setEnabled("CNOME1",false);
			form.setEnabled("CNOME2",false);
			form.setEnabled("CNOME3",false);
		break;
		
		case AUDITARCOTACAO :

			var indexes = form.getChildrenIndexes("pedidos");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("cc___"+indexes[i], false);
				form.setEnabled("desc_cc___"+indexes[i], false);
				form.setEnabled("conprod___"+indexes[i], false); 
				form.setEnabled("obs___"+indexes[i], false);
				form.setEnabled("quantidade___"+indexes[i], false);
				form.setEnabled("ckbox___"+indexes[i], false);
				form.setEnabled("codproduto___"+indexes[i], false);
				form.setEnabled("entrega___"+indexes[i], false);
				form.setEnabled("necessidade___"+indexes[i], false);
				form.setEnabled("desc_contabil___"+indexes[i], false);
				form.setEnabled("dataorcamento___"+indexes[i],false);
			}
			var c1 = form.getChildrenIndexes("cotacao1");
			for (var i=0; i<c1.length; ++i){ 
				form.setEnabled("preco1___"+c1[i], false);
				form.setEnabled("unidade1___"+c1[i], false);
				form.setEnabled("quantidade1___"+c1[i], false);
			}
			var c2 = form.getChildrenIndexes("cotacao2");
			for (var i=0; i<c2.length; ++i){ 
				form.setEnabled("preco2___"+c1[i], false);
				form.setEnabled("unidade2___"+c1[i], false);
				form.setEnabled("quantidade2___"+c1[i], false);
			}
			var c3 = form.getChildrenIndexes("cotacao3");
			for (var i=0; i<c3.length; ++i){ 
				form.setEnabled("preco3___"+c1[i], false);
				form.setEnabled("unidade3___"+c1[i], false);
				form.setEnabled("quantidade3___"+c1[i], false);
			}
			form.setEnabled("filial",false);
			form.setEnabled("pg_ant",false);
			form.setEnabled("empresa",false);
			form.setEnabled("urgente",false);
			form.setEnabled("aprovado",true);
			form.setEnabled("motivo",true);
			form.setEnabled("pedido_protheus",false);
			form.setEnabled("solicitacao_protheus",true);
			form.setEnabled("nfprotheus",false);
			form.setEnabled("aprovarsolicitacao",false);
			form.setEnabled("vencimento",false);
			form.setEnabled("frete1", false);
			form.setEnabled("frete2", false);
			form.setEnabled("frete3", false);
			form.setEnabled("prazo1", false);
			form.setEnabled("prazo2", false);
			form.setEnabled("prazo3", false);
			form.setEnabled("pg_ant1",false);
			form.setEnabled("pg_ant2",false);
			form.setEnabled("pg_ant3",false);
			form.setEnabled("COND1",false);
			form.setEnabled("COND2",false);
			form.setEnabled("COND3",false);
			form.setEnabled("CNOME1",false);
			form.setEnabled("CNOME2",false);
			form.setEnabled("CNOME3",false);
		break;
		
		case PEDIDOCOMPRAS :

			var indexes = form.getChildrenIndexes("pedidos");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("cc___"+indexes[i], false);
				form.setEnabled("desc_cc___"+indexes[i], false);
				form.setEnabled("conprod___"+indexes[i], false); 
				form.setEnabled("obs___"+indexes[i], false);
				form.setEnabled("quantidade___"+indexes[i], false);
				form.setEnabled("ckbox___"+indexes[i], false);
				form.setEnabled("codproduto___"+indexes[i], false);
				form.setEnabled("entrega___"+indexes[i], false);
				form.setEnabled("necessidade___"+indexes[i], false);
				form.setEnabled("desc_contabil___"+indexes[i], false);
				form.setEnabled("dataorcamento___"+indexes[i],false);
			}
			form.setEnabled("fornecedor1", false);
			form.setEnabled("condicao1", false);
			form.setEnabled("prazo1", false);
			form.setEnabled("totalcotacao1", false);
			form.setEnabled("frete1", false);
			form.setEnabled("valortotalcomfrete1", false);
			var c1 = form.getChildrenIndexes("cotacao1");
			for (var i=0; i<c1.length; ++i){ 
				form.setEnabled("escolhido1___"+c1[i], false);
				form.setEnabled("preco1___"+c1[i], false);
				form.setEnabled("unidade1___"+c1[i], false);
				form.setEnabled("quantidade1___"+c1[i], false);
			}
			form.setEnabled("fornecedor2", false);
			form.setEnabled("condicao2", false);
			form.setEnabled("prazo2", false);
			form.setEnabled("totalcotacao2", false);
			form.setEnabled("frete2", false);
			form.setEnabled("valortotalcomfrete2", false);
			var c2 = form.getChildrenIndexes("cotacao2");
			for (var i=0; i<c2.length; ++i){ 
				form.setEnabled("escolhido2___"+c1[i], false);
				form.setEnabled("preco2___"+c1[i], false);
				form.setEnabled("unidade2___"+c1[i], false);
				form.setEnabled("quantidade2___"+c1[i], false);
			}
			form.setEnabled("fornecedor3", false);
			form.setEnabled("condicao3", false);
			form.setEnabled("prazo3", false);
			form.setEnabled("totalcotacao3", false);
			form.setEnabled("frete3", false);
			form.setEnabled("valortotalcomfrete3", false);
			var c3 = form.getChildrenIndexes("cotacao3");
			for (var i=0; i<c3.length; ++i){ 
				form.setEnabled("escolhido3___"+c1[i], false);
				form.setEnabled("preco3___"+c1[i], false);
				form.setEnabled("unidade3___"+c1[i], false);
				form.setEnabled("quantidade3___"+c1[i], false);
			}
			form.setEnabled("filial",false);
			form.setEnabled("empresa",false);
			form.setEnabled("urgente",false);
			form.setEnabled("pg_ant",false);
			form.setEnabled("solicitacao_protheus",true);
			form.setEnabled("nfprotheus",true);
			form.setEnabled("aprovado",false);
			form.setEnabled("motivo",false);
			form.setEnabled("pedido_protheus",true);
			form.setEnabled("nfprotheus",false);
			form.setEnabled("aprovarsolicitacao",false);
			form.setEnabled("aporvacao",false);
			form.setEnabled("anexo",false);
			
		break;
		
		case ANEXANFE :

			form.setEnabled("filial",false);
			form.setEnabled("empresa",false);
			form.setEnabled("urgente",false);
			form.setEnabled("pg_ant",false);
			var indexes = form.getChildrenIndexes("pedidos");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("cc___"+indexes[i], false);
				form.setEnabled("desc_cc___"+indexes[i], false);
				form.setEnabled("conprod___"+indexes[i], false); 
				form.setEnabled("obs___"+indexes[i], false);
				form.setEnabled("quantidade___"+indexes[i], false);
				form.setEnabled("ckbox___"+indexes[i], false);
				form.setEnabled("codproduto___"+indexes[i], false);
				form.setEnabled("entrega___"+indexes[i], false);
				form.setEnabled("necessidade___"+indexes[i], false);
				form.setEnabled("desc_contabil___"+indexes[i], false);
				form.setEnabled("dataorcamento___"+indexes[i],false);
			}
			form.setEnabled("fornecedor1", false);
			form.setEnabled("condicao1", false);
			form.setEnabled("prazo1", false);
			form.setEnabled("totalcotacao1", false);
			form.setEnabled("frete1", false);
			form.setEnabled("valortotalcomfrete1", false);
			form.setEnabled("pg_ant1", false);
			var c1 = form.getChildrenIndexes("cotacao1");
			for (var i=0; i<c1.length; ++i){ 
				form.setEnabled("escolhido1___"+c1[i], false);
				form.setEnabled("preco1___"+c1[i], false);
				form.setEnabled("unidade1___"+c1[i], false);
				form.setEnabled("quantidade1___"+c1[i], false);
			}
			form.setEnabled("fornecedor2", false);
			form.setEnabled("condicao2", false);
			form.setEnabled("prazo2", false);
			form.setEnabled("totalcotacao2", false);
			form.setEnabled("frete2", false);
			form.setEnabled("valortotalcomfrete2", false);
			form.setEnabled("pg_ant2", false);
			var c2 = form.getChildrenIndexes("cotacao2");
			for (var i=0; i<c1.length; ++i){ 
				form.setEnabled("escolhido2___"+c1[i], false);
				form.setEnabled("preco2___"+c1[i], false);
				form.setEnabled("unidade2___"+c1[i], false);
				form.setEnabled("quantidade2___"+c1[i], false);
			}
			form.setEnabled("fornecedor3", false);
			form.setEnabled("condicao3", false);
			form.setEnabled("prazo3", false);
			form.setEnabled("totalcotacao3", false);
			form.setEnabled("frete3", false);
			form.setEnabled("valortotalcomfrete3", false);
			form.setEnabled("pg_ant3", false);
			var c3 = form.getChildrenIndexes("cotacao3");
			for (var i=0; i<c3.length; ++i){ 
				form.setEnabled("escolhido3___"+c1[i], false);
				form.setEnabled("preco3___"+c1[i], false);
				form.setEnabled("unidade3___"+c1[i], false);
				form.setEnabled("quantidade3___"+c1[i], false);
			}
			form.setEnabled("aprovado",false);
			form.setEnabled("motivo",false);
			form.setEnabled("pedido_protheus",false);
			form.setEnabled("aprovarsolicitacao",false);
			form.setEnabled("solicitacao_protheus",true);
			form.setEnabled("aporvacao",false);
			form.setEnabled("anexo",false);
			
		break;
		
		case FISCAL :

			var indexes = form.getChildrenIndexes("pedidos");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("cc___"+indexes[i], false);
				form.setEnabled("desc_cc___"+indexes[i], false);
				form.setEnabled("conprod___"+indexes[i], false); 
				form.setEnabled("obs___"+indexes[i], false);
				form.setEnabled("quantidade___"+indexes[i], false);
				form.setEnabled("ckbox___"+indexes[i], false);
				form.setEnabled("codproduto___"+indexes[i], false);
				form.setEnabled("entrega___"+indexes[i], false);
				form.setEnabled("necessidade___"+indexes[i], false);
				form.setEnabled("desc_contabil___"+indexes[i], false);
				form.setEnabled("dataorcamento___"+indexes[i],false);
			}
			form.setEnabled("fornecedor1", false);
			form.setEnabled("condicao1", false);
			form.setEnabled("prazo1", false);
			form.setEnabled("totalcotacao1", false);
			form.setEnabled("frete1", false);
			form.setEnabled("valortotalcomfrete1", false);
			var c1 = form.getChildrenIndexes("cotacao1");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("escolhido1___"+c1[i], false);
				form.setEnabled("preco1___"+c1[i], false);
				form.setEnabled("unidade1___"+c1[i], false);
				form.setEnabled("quantidade1___"+c1[i], false);
			}
			form.setEnabled("fornecedor2", false);
			form.setEnabled("condicao2", false);
			form.setEnabled("prazo2", false);
			form.setEnabled("totalcotacao2", false);
			form.setEnabled("frete2", false);
			var c2 = form.getChildrenIndexes("cotacao2");
			form.setEnabled("valortotalcomfrete2", false);
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("escolhido2___"+c1[i], false);
				form.setEnabled("preco2___"+c1[i], false);
				form.setEnabled("unidade2___"+c1[i], false);
				form.setEnabled("quantidade2___"+c1[i], false);
			}
			form.setEnabled("fornecedor3", false);
			form.setEnabled("condicao3", false);
			form.setEnabled("prazo3", false);
			form.setEnabled("totalcotacao3", false);
			form.setEnabled("frete3", false);
			form.setEnabled("valortotalcomfrete3", false);
			var c3 = form.getChildrenIndexes("cotacao3");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("escolhido3___"+c1[i], false);
				form.setEnabled("preco3___"+c1[i], false);
				form.setEnabled("unidade3___"+c1[i], false);
				form.setEnabled("quantidade3___"+c1[i], false);
			}
			form.setEnabled("filial",false);
			form.setEnabled("empresa",false);
			form.setEnabled("urgente",false);
			form.setEnabled("pg_ant",false);
			form.setEnabled("anexock",false);
			form.setEnabled("anexock2",false);
			form.setEnabled("anexock3",false);
			form.setEnabled("aprovado",false);
			form.setEnabled("motivo",false);
			form.setEnabled("pedido_protheus",false);
			form.setEnabled("aprovarsolicitacao",false);
			form.setEnabled("solicitacao_protheus",true);
			form.setEnabled("aporvacao",false);
			form.setEnabled("nfprotheus",false);
			form.setEnabled("anexo",false);
			form.setEnabled("vencimento",false);
			form.setEnabled("notaparcial",false);
			//form.setEnabled("pedidoparcial",false);
		break;
		
		case VALIDACAOSOLICITANTE :

			var indexes = form.getChildrenIndexes("pedidos");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("cc___"+indexes[i], false);
				form.setEnabled("desc_cc___"+indexes[i], false);
				form.setEnabled("conprod___"+indexes[i], false); 
				form.setEnabled("obs___"+indexes[i], false);
				form.setEnabled("quantidade___"+indexes[i], false);
				form.setEnabled("ckbox___"+indexes[i], false);
				form.setEnabled("codproduto___"+indexes[i], false);
				form.setEnabled("entrega___"+indexes[i], false);
				form.setEnabled("necessidade___"+indexes[i], false);
				form.setEnabled("desc_contabil___"+indexes[i], false);
				form.setEnabled("dataorcamento___"+indexes[i],false);
				
			}
			var c1 = form.getChildrenIndexes("cotacao1");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("escolhido1___"+c1[i], false);
				form.setEnabled("preco1___"+c1[i], false);
				form.setEnabled("unidade1___"+c1[i], false);
				form.setEnabled("quantidade1___"+c1[i], false);
			}
			var c2 = form.getChildrenIndexes("cotacao2");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("escolhido2___"+c1[i], false);
				form.setEnabled("preco2___"+c1[i], false);
				form.setEnabled("unidade2___"+c1[i], false);
				form.setEnabled("quantidade2___"+c1[i], false);
			}
			var c3 = form.getChildrenIndexes("cotacao3");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("escolhido3___"+c1[i], false);
				form.setEnabled("preco3___"+c1[i], false);
				form.setEnabled("unidade3___"+c1[i], false);
				form.setEnabled("quantidade3___"+c1[i], false);
			}
			form.setEnabled("filial",false);
			form.setEnabled("empresa",false);
			form.setEnabled("urgente",false);
			form.setEnabled("aprovado",true);
			form.setEnabled("motivo",true);
			form.setEnabled("nfprotheus",false);
			form.setEnabled("aprovarsolicitacao",false);
			form.setEnabled("solicitacao_protheus",false);
			form.setEnabled("pedido_protheus",false);
			form.setEnabled("vencimento",false);
			form.setEnabled("frete1", false);
			form.setEnabled("frete2", false);
			form.setEnabled("frete3", false);
			form.setEnabled("prazo1", false);
			form.setEnabled("prazo2", false);
			form.setEnabled("prazo3", false);
			form.setEnabled("pg_ant1",false);
			form.setEnabled("pg_ant2",false);
			form.setEnabled("pg_ant3",false);
			form.setEnabled("COND1",false);
			form.setEnabled("COND2",false);
			form.setEnabled("COND3",false);
			form.setEnabled("CNOME1",false);
			form.setEnabled("CNOME2",false);
			form.setEnabled("CNOME3",false);
		break;
		
		case PARCIAL :

			form.setEnabled("filial",false);
			form.setEnabled("empresa",false);
			form.setEnabled("urgente",false);
			form.setEnabled("pedido_protheus",false);
			form.setEnabled("solicitacao_protheus",true);
			form.setEnabled("nfprotheus",false);
			form.setEnabled("pg_ant",false);
			form.setEnabled("vencimento1",false);
			form.setEnabled("vencimento2",false);
			form.setEnabled("vencimento3",false);
			form.setEnabled("anexo",false);
			var indexes = form.getChildrenIndexes("pedidos");
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("cc___"+indexes[i], false);
				form.setEnabled("desc_cc___"+indexes[i], false);
				form.setEnabled("conprod___"+indexes[i], false); 
				form.setEnabled("obs___"+indexes[i], false);
				form.setEnabled("quantidade___"+indexes[i], false);
				form.setEnabled("ckbox___"+indexes[i], false);
				form.setEnabled("codproduto___"+indexes[i], false);
				form.setEnabled("entrega___"+indexes[i], false);
				form.setEnabled("necessidade___"+indexes[i], false);
				form.setEnabled("desc_contabil___"+indexes[i], false);
				form.setEnabled("dataorcamento___"+indexes[i],false);
			}
			var c1 = form.getChildrenIndexes("cotacao1");
			form.setEnabled("fornecedor1", false);
			form.setEnabled("condicao1", false);
			form.setEnabled("prazo1", false);
			form.setEnabled("totalcotacao1", false);
			form.setEnabled("frete1", false);
			form.setEnabled("valortotalcomfrete1", false);
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("escolhido1___"+c1[i], false);
				form.setEnabled("preco1___"+c1[i], false);
				form.setEnabled("unidade1___"+c1[i], false);
				form.setEnabled("quantidade1___"+c1[i], false);
			}
			var c2 = form.getChildrenIndexes("cotacao2");
			form.setEnabled("fornecedor2", false);
			form.setEnabled("condicao2", false);
			form.setEnabled("prazo2", false);
			form.setEnabled("totalcotacao2", false);
			form.setEnabled("frete2", false);
			form.setEnabled("valortotalcomfrete2", false);
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("escolhido2___"+c1[i], false);
				form.setEnabled("preco2___"+c1[i], false);
				form.setEnabled("unidade2___"+c1[i], false);
				form.setEnabled("quantidade2___"+c1[i], false);
			}
			var c3 = form.getChildrenIndexes("cotacao3");
			form.setEnabled("fornecedor3", false);
			form.setEnabled("condicao3", false);
			form.setEnabled("prazo3", false);
			form.setEnabled("totalcotacao3", false);
			form.setEnabled("frete3", false);
			form.setEnabled("valortotalcomfrete3", false);
			for (var i=0; i<indexes.length; ++i){ 
				form.setEnabled("escolhido3___"+c1[i], false);
				form.setEnabled("preco3___"+c1[i], false);
				form.setEnabled("unidade3___"+c1[i], false);
				form.setEnabled("quantidade3___"+c1[i], false);
			}
		break;
		
		case DIVERGENCIAPRECOMAX:
			
			setEnabledCampos(false,form,atividadeAtual);
			
		break;
		
		case PROTOCOLORECEBIMENTO :
			
			setEnabledCampos(false,form,atividadeAtual);
			//form.setEnabled("aprovarSolicitDivergencia",true);
			
		break;
			
			setEnabledCampos(true,form,atividadeAtual);
			
		break;
		
		case PRESENCACARGAABAX :
			
			setEnabledCampos(false,form,atividadeAtual);
			
			
		break;	
		
		case ABAXNOTA :
			
			setEnabledCampos(false,form,atividadeAtual);
		
			
		break;	
		
		default:
			form.setHideDeleteButton(true);
			
	    break;
	}
}// Informe True para Habilitar ou False para Desabilitar os campos
function setEnabledCampos(habilitar,form,atividadeAtual){

	var mapaForm = new java.util.HashMap();
	mapaForm = form.getCardData();
	var it = mapaForm.keySet().iterator();
	while (it.hasNext()) { // Laço de repetição para habilitar/desabilitar os campos
		var key = it.next();
		//Deve ser ignorado o campo aprovarSolicitDivergencia
		if(key=="aprovarSolicitDivergencia" && atividadeAtual==DIVERGENCIAPRECOMAX ){
			
		}else{
			form.setEnabled(key, habilitar); 
			
		}
		               	
	}
}