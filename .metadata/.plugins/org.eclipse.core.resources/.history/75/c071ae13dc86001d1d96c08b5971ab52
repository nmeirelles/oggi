
function createDataset(fields, constraints, sortFields) {

	var dataset = DatasetBuilder.newDataset();
    var dataSource = "/jdbc/BDPROTHEUS";
    var ic = new javax.naming.InitialContext();
    var ds = ic.lookup(dataSource);
	var created = false;
	var empresa;
	 
    //criar constraints
    if(constraints != null){
        for(var i = 0; i < constraints.length; i++){
            if(constraints[i].fieldName == "EMPRESA") empresa = constraints[i].initialValue;
        }
    }
 
    var myQuery = "SELECT * FROM [dbo].[fn_bi_cad_turno]('"+empresa+"')";

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