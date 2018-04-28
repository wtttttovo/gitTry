const http = require("http");
const url = require("url");
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((req,res)=>{
    let pathname= url.parse(req.url).pathname.substr(1);  
    let method = req.method;

    if(method==='POST'){
		let users,info,flag=0;
		req.on('data',(data)=>{
        	info = qs.parse(data.toString());
			console.log('get data');
			fs.readFile('users.json','utf8',(err,data)=>{	//这个是最后执行的so 下面users娶不到数据，，，我的天，，异步顺序是怎么控制的啊，，，
				users = JSON.parse(data);	//转化的stringkey-value要使用双引号，，，我靠想骂人
				console.log('read file');
			});

    	});

		/*qs.parse(info);     异步进行的，所以不能获取到req.on里面的操作*/

		req.on('end',()=>{
            try{
                if(users[info.user] !==undefined){
                    flag = pwd === users[info.user]?1:2;
                }
			}catch{
				console.log('not exist');
			}

			if(pathname === 'register.html'){
				if(flag===0){
					users[info.user]=info.pwd;
					fs.writeFile('users.json',users,()=>{
						res.end('register success');
				});
				}else{
					res.end('user exist');
				}

			}else{
				flag===1?pathname='index.html':res.end(flag);
			}
		});

    }

    /*try{
     fs.readFile(pathname,function(err, data) {  
           res.writeHead(200,{'Content-Type': 'text/html'});
           console.log(data);
           res.end(data);
     });
    }catch(err){
           console.log(err);  
           res.writeHead(404,{'Content-Type': 'text/html'});
           res.end('404  wrong url');
    }*/
   }).listen(8913,()=>{
console.log(`Server is running`);
});

 
