const express=require('express') ;
const bodyParser=require('body-parser') ;
//create express app here
const app=express() ; 
//setup the server port 
const port=process.env.PORT ||4000 ;
//parse request data content type application/x-www-form
app.use(bodyParser.urlencoded({extended:false})) ;
//parse request data content type application/jason
app.use(bodyParser.json()) ;
//define root route 
app.get('/',(req,res)=>
{
    res.send('hello world') ;

}) ;

//import employee routes
const candidateroutes=require('./src/routes/candidate.route');
//create employee routes
app.use('/api/v1/candidate',candidateroutes) ;

app.listen(port,()=>{
 console.log(`Express server is running at port ${port}`)
}) ;