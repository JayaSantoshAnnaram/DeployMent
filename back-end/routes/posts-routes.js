const express=require('express');
const postmodel=require('../post-model/post');
const authentication=require('../auth-check/auth')
const router=express.Router();

//Post Create Route
router.post('',authentication,(req,res)=>{
    
    postmodel.create({
        title:req.body.title,
        content:req.body.content,
        _id:req.body._id,
        creator:req.add.id
        
    }).then(data=>console.log(data));
    
    res.status(200).json({msg:'Added SuccesFully'});
    
});

//Get All Posts Route
router.get('',(req,res,next)=>{
    postmodel.find()
    .then(data=>{
        res.status(200).json({
            'message':'Post Data Success',
            data
        });
    })
    .catch(err=>console.log('error occured'));
});

//Handler for deleting Route
router.delete('/:id',authentication,(req,res,next)=>{
    const id=req.params.id;
    postmodel
    postmodel.deleteOne({_id:id,creator:req.add.id}).then(deletedData=>{
        if(deletedData.n>0){
            res.status(201).json({
                'message':'Data Deleted',
                deletedData
            });
        }
        res.status(400).json({
            'message':'Youre not authorized to delete the post'
        })

    })
    .catch (err=>res.end('Data Not Deleted'))
});

//Handler for Fetching post by ID
router.get('/:id',(req,res,next)=>{
    const id=req.params.id;
    postmodel.findById(id).then(data=>{
        res.status(200).json({
            'message':'Post Updated Success',
            data
        });
    })
    .catch (err=>res.end('Data Not Deleted'))
});

//Handler for Editing the post by ID
router.patch('/:id',authentication,(req,res,next)=>{
    const id=req.params.id;
    postmodel.updateOne({_id:id,creator:req.add.id},{
        title:req.body.title,
        content:req.body.content,
        creator:req.add.id
    }).then((modifiedData)=>{
        if(modifiedData.nModified>0){
            res.status(201).json({
                'message':'PostUpdated Successfully' 
            })
        }
        res.status(400).json({
            'message':' You\'re are not authorised to edit'
        })

        
    });
});

module.exports=router;