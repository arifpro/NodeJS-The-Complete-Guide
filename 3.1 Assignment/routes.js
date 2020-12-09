const fs = require('fs');

const siteHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head>
                <title>Home (Assignment 1)</title>
            </head>
            <body>
                <form action="/create-user" method="POST">
                    <input type="text" name="username">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>`);
        return res.end();
    };

    if (url === '/users') {
        fs.readFile('users.txt', 'utf8', (err, data) => {
            if (err) throw err;
            const users = data.split('\n');
            
            res.setHeader('Content-Type', 'text/html');
            res.write(`<html>
                <head>
                <title>Users (Assignment 1)</title>
                </head>
                <body><ul>`);
            for (let i=0; i<users.length-1; i++) {
                res.write(`<li>${users[i]}</li>`);
            }
            res.write(`</ul></body></html>`);
            return res.end();
        });
    };

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => body.push(chunk));
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];

            const textFile = fs.createWriteStream('users.txt', { flags: 'a' });
            textFile.write(`${username}\n`);
            textFile.end();
            // fs.writeFileSync('user.txt', username);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
    };
};

module.exports = siteHandler;