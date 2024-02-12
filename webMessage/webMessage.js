const http = require('http');
const fs = require('fs');
const path = require('path');
//var clientId = '01c46f6d-6023-4b60-ba9c-5b1d5c25979c';
//var clientSecret = '-GyxueS5XFE5xZXPBRjVXKS4QfNWIQNGvKZzODR9l-I';
//var encodedData = Buffer.from(clientId + ':' + clientSecret).toString('base64');
//var authorizationHeaderString = 'Authorization: Basic ' + encodedData;
//console.log(authorizationHeaderString)
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
  
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
