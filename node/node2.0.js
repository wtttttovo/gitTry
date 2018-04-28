const http = require("http");
const url = require("url");
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req,res)=>{
    let pathname= url.parse(req.url).pathname.substr(1);

    if(req.method==='POST'){
		let users,info;

        req.on('data',(data)=>{			//获取传递的数据
            info = qs.parse(data.toString());
            console.log(info);
        });

		fs.readFile('users.json','utf8',(err,data)=>{
			users = JSON.parse(data);					//读取文件数据
			let flag = users[info.user] === undefined ? 0: (info.pwd === users[info.user]?1:2); 	//判断信息是否存在或匹配

			if(pathname === 'register.html'){
				if(flag===0){
					users[info.user]=info.pwd;				//写入数据
					fs.writeFile('users.json',JSON.stringify(users),(err)=>{
						if(err){
							res.end('register fail');
							return;
						}
					});
					res.end('register success');
				}else{
					res.end('user existed');
				}

			}else{
				flag===1?pathname='index.html':res.end('user not exist || wrong pwd');
			}
            setHTML(pathname,res);
		});

    }else{
        setHTML(pathname,res);
	}
   }).listen(8913,()=>{
console.log(`Server is running`);
});


function setHTML(pathname,res) {
	console.log(pathname);
    fs.readFile(pathname,function(err, data) {
        if(err){
            console.log('not exist url');
            res.writeHead(404,{'Content-Type': 'text/html'});
            res.end('404  wrong url');
            return;
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end(data);
    });
}
