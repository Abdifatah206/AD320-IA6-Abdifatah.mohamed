var http = require('http')
http.get(process.argv[2], processResponse)
function processResponse (response, err) {
  response.setEncoding('utf8')
      response.on('data', console.log)
  response.on('error', console.error)

}