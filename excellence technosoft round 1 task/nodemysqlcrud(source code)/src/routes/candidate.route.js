//yaha pei router banate hai har functionality ke liye controler mei di hui hai jo

const express=require('express') ;
const router=express.Router() ;
const candidatecontroller=require('../controllers/candidate.controller') ;
//get all employees
router.get('/api/v1/candidate',candidatecontroller.getcandidateList);
// creating router for get employee by id

router.get('/:id',candidatecontroller.getcandidatebyid) ; 
//creating route for to put employee into database
router.post('/',candidatecontroller.createNewCandidate) ;
module.exports=router ;