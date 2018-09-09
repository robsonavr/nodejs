var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamefile1.txt', function(err){
    if (err) throw err;
    console.log('Renamed!');
});

