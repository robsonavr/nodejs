var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.0.31",
  port: "3306",
  user: "root",
  password: "eletr1ca",
  database: "mydb"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("1 record inserted");
  });
});
