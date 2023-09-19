const http = require('http');
const { readFile, readFileSync } = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        readFile('./HTMLContent/homePage.html', 'utf8', (err, responce) => {
            if (err) throw err;
            res.end(responce);
        })
        return;
    }
    if (req.url === '/about') {
        readFile('./HTMLContent/about.html', 'utf8', (err, responce) => {
            if (err) throw err;
            res.end(responce);
        });
        return;
    }
    readFile('./HTMLContent/error.html', 'utf8', (err, responce) => {
        if (err) throw err;
        res.end(responce);
    });
});

server.listen(5000);
