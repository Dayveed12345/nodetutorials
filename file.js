const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
// console.log(dirPath)
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+'/'+i+'hello.txt',"Some simple files "+i)
// }
fs.readdir(dirPath,(err,files)=>{
    console.log(files)
})