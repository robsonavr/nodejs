//const express = require('express');
const sql = require('mssql');
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    // config for your database
    var config = {
        user: 'ROBSON',
        password: 'bys3300',
        server: '172.21.10.4\\sqlexpress', 
        database: 'Bystronic_gerencial' 
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
	    var pesquisa = 'select t.codtransacao, t.codclifor, uc.nome, t.codnatu, n.descricao, data, nota, totalnf from transacao as t left join unidclifor as uc on t.codclifor=uc.codclifor left join natopera as n on t.codnatu=n.codnatu where cast(data AS DATE) > (getdate()-10) order by uc.nome;'
        
        request.query(pesquisa, function (err, recordset) {    
            if (err) {
                console.log(err);
                sql.close();
            }
            var objeto = Object.values(recordset["recordset"]);
            res.write(Object.values(objeto));
            res.end();
            sql.close();
        });
    });
}).listen(5000);
