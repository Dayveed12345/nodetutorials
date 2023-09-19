const express=require('express');
const app=express();
app.get("/about",(res,resp)=>{
    resp.send("Hi, This is the about page ");
});
const port=5000
app.listen(port,()=>{
    console.log(`Running on Port ${port}`)
})