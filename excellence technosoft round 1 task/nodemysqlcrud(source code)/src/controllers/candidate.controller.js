const candidatemodel=require('../models/candidate.model') ;
exports.getcandidateList=(req,res)=>{
    // console.log('here all employees list') ;
    candidatemodel.getAllcandidates((err,candidates)=>{
        console.log('we are here') ;
        if(err)
        {
            res.send(err) ;

        }
        console.log('we are here',candidates) ;
        res.send(candidates) ;

    })

}
exports.getcandidatebyid=(req,res)=>{
    // console.log('get element by id') ;
    candidatemodel.getcandidateById(req.params.id,(err,candidate)=>{
        if(err)
        {
            res.send(err) ;

        }
        console.log('single employee data',candidate) ;
        res.send(candidate)


    })

} 

exports.createNewCandidate=(req,res)=>{
    // console.log('req data',req.body) ;
    const candidateReqData=new candidatemodel(req.body);
    //check null
    if(req.body.constructor===Object && Object.keys(req.body).length===0)
    {
        res.send(400).send({success:false,message:'please fill fields'})

    }
    else
    {
        console.log('valid data') ;
        candidatemodel.createCandidate(candidateReqData,(err,candidate)=>{
            if(err)
             res.send(err) ;
    
           
            res.json({status:true,message:'candidate inserted',data:candidate})
           
    
    
        })

    }
}