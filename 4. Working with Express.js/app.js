const http = require('http');

// custom
const routes = require('./routes');

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(1234);