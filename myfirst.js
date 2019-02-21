  var fs = require('fs')

    var buff = fs.readFileSync(process.argv[2])
    var string = buff.toString().split('\n');
    console.log(string.length - 1)