var dbconn=require('../../config/db.config');
var Candidate=function(candidate){
    this.id=candidate.id ;
    this.name=candidate.name ;
    this.email=candidate.email ;
    

}
Candidate.getAllcandidates=(result)=>{
    dbconn.query('SELECT id,(first_round+second_round+third_round)/3 as avg FROM test_score',(err,res)=>{
     if(err)
     {
         console.log('error while fetching employees',err) ;
         result(null,err) ;
 
     }
     else
     {
         console.log('employees fetched successfuly') ;
         result(null,res) ;
 
 
     }
 
    }) 
        
 }

//candidate by id
Candidate.getcandidateById=(id,result)=>{
    dbconn.query('SELECT id,(first_round+second_round+third_round)/3 as avg FROM test_score',id,(err,res)=>{
     if(err)
     {
         console.log('error while fetching employees by id',err) ;
         result(null,err) ;
 
     }
     else
     {
         console.log('candidate fetched successfuly') ;
         result(null,res) ;
 
 
     }
 
    }) 
        
 }
Candidate.createCandidate=(candidateReqData,result)=>{
    dbconn.query('INSERT INTO candidate SET?',candidateReqData,(err,res)=>{
        if(err)
        {
            console.log('error while inserting data',err) ;
            result(null,err) ;
    
        }
        else
        {
            console.log('candidate created successfuly') ;
            result(null,res) ;
    
    
        }
    
       }) 

 }
 module.exports=Candidate ;