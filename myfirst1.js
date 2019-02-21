  //myfirst
 
var fs = require('fs')
fs.readFile(process.argv[2], Lines)
function Lines (error, text) {
   var Count = text.toString().split('\n')
  console.log(Count.length - 1)
}