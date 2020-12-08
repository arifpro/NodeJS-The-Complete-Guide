const http = require('http');

// custom
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(1234);