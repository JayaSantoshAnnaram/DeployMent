const express=require('express');
const userModel=require('../post-model/user');
const jwt=require('jsonwebtoken');
const router=express.Router();

router.post('/sign-up',(req,res)=>{

    userModel.create({
      email:req.body.email,
      password:req.body.password  
    }).then((data)=>{
        res.status(201).json({
            msg:'User Details Added Successfully',
            data
    })
    }).catch(err=>{
        res.status(400).json({
            'Message':'Email ID arleady exist, Please choose Unique Email Id'
        })
        });
});

router.post('/sign-in',(req,res)=>{

    userModel.findOne({email:req.body.email}).then((user)=>{
        if(!user){
            // throw Error('Email Id not exist please Sign up for proceeding further');
             res.status(400).json({'Message':'Email Id not exist please Sign up for proceeding further'})
            
        }      
        else if(user.password!=req.body.password){
            res.status(400).json({'Message':'Password is wrong please! enter the correct password'})     
        }
        else if(user.password==req.body.password){
            const token=jwt.sign({email:user.email,id:user._id},'SecretKey',{
                expiresIn:'1h',
            });
             res.status(200).json({
                'token':token,
                'timer':3600,
                'userId':user._id
            })
        }  
    })

    

    // else if(user.password==req.body.password){
    //     return res.status(200).json({
    //         'message':'user Signed In SuccessFully'
    //     })
    // }
});
module.exports=router;