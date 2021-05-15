const mysql=require('mysql') ;
//create here mysql connection
const dbconn=mysql.createConnection({
    host:'localhost',
   user: 'root' ,
   password:'',
   database:'nodejscrudapi'


})
dbconn.connect(function(error){
    if(error)
    {
        throw error ;

    }
    console.log('database connected successfully ') ;
})
module.exports=dbconn ;