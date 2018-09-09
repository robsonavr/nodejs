var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.0.31",
  port: "3306",
  user: "root",
  password: "eletr1ca"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
});
