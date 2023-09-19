const conn=require('./connection');//Exported model getting it from the other files 
const bcrypt = require('bcrypt');// trying to add password hashing to my codes
const saltRounds = 10; // Number of salt rounds to use (higher is better but slower)

const plainPassword =12345; // Replace with the user's actual password
const newData={
    name:'Ali adebambo',
    email:'faisal@gmail.com',
    password:plainPassword
};//Dummily inserting this data to database
const insertQuery='INSERT INTO  nodetb (name,email,password)VALUES(?,?,?)';//query to insert data into database
conn.query(insertQuery,[newData.name,newData.email,newData.password],(err,results)=>{
    if(err){
        console.error('Error inserting data:',err);
        return ;
    }
    console.log('Data Inserted Successfully:',results.affectedRows)
})// Executing the query 