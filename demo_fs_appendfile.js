var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is my text\n', function(err){
    if (err) throw err;
    console.log('Updated!');
});
