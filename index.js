//  module.exports={
//     x:10,
//     y:20,
//     xyz:function(){
//         return this.x+this.y
//     }
//  }
// const fs=require('fs');
// console.log('code step by step');
// fs.writeFileSync('hello.txt',"David is learning node")
// console.log(__filename);
const http=require('http');
const data=require('./data');
http.createServer((req,res)=>{
res.writeHead(200,{
    'Content-type':'application/json'
});
res.write(JSON.stringify(data));
res.end();
}).listen(5000);