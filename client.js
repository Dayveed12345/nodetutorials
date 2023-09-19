const http=require('http');
http.createServer((req,res)=>{
    res.write("<h1>David has started learning nodeJS</h1>");
    res.end();
}).listen(5000);