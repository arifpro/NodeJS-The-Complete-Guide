const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(`<url>: ${req.url}`);
    // console.log(`\n<method>: ${req.method}`);
    // console.log(req.headers);
    
    // process.exit();

    

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>This is title</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(1234);