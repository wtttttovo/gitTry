const http = require("http");
const qs = require("querystring");

let data = qs.stringify({user:'tt',pwd:'123'});
let option={
    hostname:'127.0.0.1',
    port:8913,
    path:`/login.html`,
    method:'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};


let req = http.request(option,()=>{
    console.log('get');
});
req.write(data);
req.end();
