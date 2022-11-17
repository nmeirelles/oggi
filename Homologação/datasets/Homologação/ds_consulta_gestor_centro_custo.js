
function createDataset(fields, constraints, sortFields){

	var dataset = DatasetBuilder.newDataset();
    var dataSource = "/jdbc/BDPROTHEUS";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
	var created = false;
 
    var myQuery =   " SELECT DISTINCT EMPRESA, FILIAL, GESTOR, NOME, CC, DESCCC, EMAIL, IDPROTHEUS, IDPROTSUP from dbo.fn_microsiga_gestor_cc() "+
                    " SELECT '01' EMP, CTT_FILIAL, CTT_CUSTO, CTT_DESC01 FROM CTT010 WHERE CTT_BLOQ <> '1' AND D_E_L_E_T_ = '' "+
                    " UNION ALL "+
                    " SELECT '02' EMP, CTT_FILIAL, CTT_CUSTO, CTT_DESC01 FROM CTT020 WHERE CTT_BLOQ <> '1' AND D_E_L_E_T_ = '' "+
                    " UNION ALL "+
                    " SELECT '03' EMP, CTT_FILIAL, CTT_CUSTO, CTT_DESC01 FROM CTT030 WHERE CTT_BLOQ <> '1' AND D_E_L_E_T_ = '' "+
                    " UNION ALL "+
                    " SELECT '04' EMP, CTT_FILIAL, CTT_CUSTO, CTT_DESC01 FROM CTT040 WHERE CTT_BLOQ <> '1' AND D_E_L_E_T_ = '' "+
                    " UNION ALL "+
                    " SELECT '07' EMP, CTT_FILIAL, CTT_CUSTO, CTT_DESC01 FROM CTT070 WHERE CTT_BLOQ <> '1' AND D_E_L_E_T_ = '' "+
                    " UNION ALL "+
                    " SELECT '08' EMP, CTT_FILIAL, CTT_CUSTO, CTT_DESC01 FROM CTT080 WHERE CTT_BLOQ <> '1' AND D_E_L_E_T_ = '' "+
                    " UNION ALL "+
                    " SELECT '10' EMP, CTT_FILIAL, CTT_CUSTO, CTT_DESC01 FROM CTT100 WHERE CTT_BLOQ <> '1' AND D_E_L_E_T_ = '' ";

    try {
        var conn = ds.getConnection();
        var stmt = conn.createStatement();
        var rs = stmt.executeQuery(myQuery);
        var columnCount = rs.getMetaData().getColumnCount();
        while (rs.next()) {
            if (!created) {
                for (var i = 1; i <= columnCount; i++) {
                    dataset.addColumn(rs.getMetaData().getColumnName(i));
                }
                created = true;
            }
            var Arr = new Array();
            for (var i = 1; i <= columnCount; i++) {
                var obj = rs.getObject(rs.getMetaData().getColumnName(i));
                if (null != obj) {
                    Arr[i - 1] = rs.getObject(rs.getMetaData().getColumnName(i)).toString();
                } else {
                    Arr[i - 1] = "null";
                }
            }
            dataset.addRow(Arr);
        }
    } catch (e) {
        log.error("ERRO==============> " + e.message);
    } finally {
        if (rs != null) {
            rs.close();
        }
        if (stmt != null) {
            stmt.close();
        }
        if (conn != null) {
            conn.close();
        }
    }
    return dataset;
	
}