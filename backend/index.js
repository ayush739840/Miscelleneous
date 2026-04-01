const express= require('express');
const app = express();
const port = 8080;
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.get("/action",(req,res)=>{
    let {user,password}=req.query;
    res.send(`standered GET response, welcome ${user}!`);
})
app.post("/action",(req,res)=>{
    let {user,password}=req.body;
    res.send(`standered POST response , welcome ${user}!`);
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});