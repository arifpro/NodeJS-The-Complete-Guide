// default
const http = require('http');

// 3rd party
const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(1234);