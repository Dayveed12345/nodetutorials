const mysql=require('mysql')
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodedb'
});
connection.connect((err)=>{
    if(err){
        console.error('Error connecting to MYSQL:',err);
        return;
    }
    console.log('connected to MYSQL')
})
module.exports=connection;