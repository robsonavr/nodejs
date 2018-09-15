const http = require('http');
const mssql = require('mssql');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    //config for your database
    var config = {
        user: 'sa',
        password: 'Yukon900',
        server: '192.168.0.31\\SQLEXPRESS',
        database: 'DemoData',
        port: 1433,
        options: {encrypt: true}
    };

    //conect to your database
    mssql.connect(config, function(err){
        if(err) throw err;
        res.write('Conectado');
        var request = new mssql.Request();
        request.query('SELECT * FROM Products', function(err, recordset){
            if(err) throw err;
            res.write('Registros');
            res.write(recordset);
        });
    });
    mssql.close(); 
    res.end('Fim do acesso ao banco de dados');
}).listen(8000);
