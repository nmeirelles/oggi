
function createDataset(fields, constraints, sortFields){

    log.info('ds_consulta_id');

	var dataset = DatasetBuilder.newDataset();
    var dataSource = "/jdbc/AppDS";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
	var created = false;
 
    var IDPROTHEUS = '';
    if(constraints != null){
	    for(var i = 0; i < constraints.length; i++){
	    	if(constraints[i].fieldName == "IDPROTHEUS") IDPROTHEUS = String(constraints[i].initialValue);
        }
    }

    var myQuery =   " SELECT ut.USER_CODE, ut.EMAIL FROM fdn_userdata ud "+
                    " JOIN fdn_usertenant ut ON ud.USER_TENANT_ID = ut.USER_TENANT_ID "+ 
                    " WHERE DATA_KEY='IDPROTHEUS' AND DATA_VALUE='"+IDPROTHEUS+"'";

    log.info(myQuery);
    
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