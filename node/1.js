const fs = require('fs');
const http = require("http");

/*fs.readFile('users.json',(err,data)=>{
	console.log(JSON.stringify(data));

});*/
const server = http.createServer((req,res)=> {
	let info='';
    req.on('data', (data) => {
		info += decodeURIComponent(data);
	});
	console.log(info);
	res.writeHead(200,{'Content-Type': 'text/html'});
	res.end(info);

}).listen(8913,()=>{
    console.log(`Server is running`);
});