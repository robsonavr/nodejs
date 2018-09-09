var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello world, content!\n', function(err){
    if(err) throw err;
    console.log('Saved!');
});
