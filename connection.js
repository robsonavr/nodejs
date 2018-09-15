var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'Yukon900',
        server: '192.168.0.31', 
        database: 'DemoData' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
       if (err) {
           console.log(err);
           sql.close();
       }

       // create Request object
       var request = new sql.Request();
           
       // query to the database and get the records
	   var pesquisa = 'select * from Products;'
       
       request.query(pesquisa, function (err, recordset) {     
            if (err) {
                console.log(err);
                sql.close();
            }
	       res.set({"Content-Type": "text/html;charset=utf-8"});
	       
	       res.send(function(objeto){
                objeto = Object.values(recordset["recordset"]);                
            });
	       res.end();
           sql.close();     
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});