var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('sslcert/cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var cors = require('cors');

const express = require('express');
 
// Constants
const PORT = 7212;
const HOST = '127.0.0.1';

const app = express();
app.use(cors());
app.get('/api/apples', (req, res) => {

    const apples = [ 
        {"kind": "red" }, 
        {"kind": "green" },
        {"kind": "yellow"}
    ];

    res.send(apples)
})

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(PORT, HOST, () => {
    console.log(`Running APPLES service on https://${HOST}:${PORT}`);
})
