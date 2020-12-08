const fs = require('fs');

const siteHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>Welcome to this site!</h1>
                <form action="/create-user" method="POST">
                    <input type="text" name="username">
                    <button>Send</button>
                </form>
            </body>
        </html>`);
        res.end();
    };
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head>
                <title>User list</title>
            </head>
            <body>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                </ul>
            </body>
        </html>`);
        res.end();
    };
    if (url === '/create-user' && method === 'POST') {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    };
};

module.exports = siteHandler;