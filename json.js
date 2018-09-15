const http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type":"text/html"});

	var colecao = ({"animais":[{"familia":"mamiferos", "alimentacao":"onivoros"},
		{"familia":"aves", "alimentacao":"onivoros"},
		{"familia":"repteis","alimentacao":"carnivoros"}],
		"maquinas":[{"fabricante":"Bystronic", "tipo":"laser"},
		{"fabricante":"Honda", "tipo":"carro"}]});

	var conteudo = '<!DOCTYPE html><html><head>\
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\
	<title>Colecao de json</title></head><body>';
	
	conteudo = conteudo + '<table border="1"><tr><th>Familia</th><th>Alimentacao</th></tr>';

	for(i in colecao.animais) {
		conteudo = conteudo + '<tr><td>' + JSON.stringify((colecao.animais[i].familia)) + '</td>';
		conteudo = conteudo + '<td>' + JSON.stringify((colecao.animais[i].alimentacao)) + '</td></tr>';
	}

	conteudo = conteudo + '</table>';
	conteudo = conteudo + '</body></html>';

	res.write(conteudo);
	res.end();
	
}).listen(8000);