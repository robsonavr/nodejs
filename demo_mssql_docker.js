var express = require("express");
var app = express();
var connection = require('tedious').Connection;
var request = require('tedious').Request;
var http = require('http');


http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('Sistema de banco de dados');

    //set up the connection information
    var config = {
        userName: 'sa',
        password: 'Yukon900', // update me
        server: '192.168.0.31',
        options: {
            database: 'DemoData',
            readOnlyIntent: true,
            encryt: true
        }
    }

    var conn = new connection(config);

    conn.on('connect', function(err) {
        if (err) {
            console.log("linha 1 " + err);
        } else {
            sqlreq = new request("SELECT * FROM Products FOR JSON AUTO", function(err, rowCount) {
                if (err) {
                    console.log("linha 2 " + err);
                }
            });

            sqlreq.on('row', function(columns) { 
                columns.forEach(function(column) {  
                    if (column.value === null) {  
                        console.log('NULL');
                    } else {  
                            res.write("<p>");
                            res.write(column.value);
                            res.write("</p>");
                    }
                res.end();  
                });
            });

            conn.execSql(sqlreq); 
        }

    });
}).listen(5000);  

console.log("Servico ativo na porta 5000");


