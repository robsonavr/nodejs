var express = require(express);
var app = express();

app.get('/', function(req, res){
    var mssql = require('mssql');

    //config for your database
    var config = {
        user: 'sa',
        password: 'Yukon900',
        server: '192.168.0.31\\SQLEXPRESS',
        database: 'DemoData',
        port: 1433
    };

    //conect to your database
    mssql.connect(config, function(err){
        if(err) throw(err);
        var request = new mssql.Request();
        request.query('SELECT * FROM db_accessadmin', function(err, recordset){
            if(err) throw(err);
            res.send(recordset);
        });
    });
});

var server = app.listen(5000, function(){
    console.log('Server is running...');
});
