//if is referring to a file in local use ./http
const http = require('http'); //require is reserved keywword
const routes = require('./routes'); //node will look for this file, and look for module export

const server = http.createServer(routes);


server.listen(3000);