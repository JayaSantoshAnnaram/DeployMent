const express=require('express');
const postmodel=require('../post-model/post');
const authentication=require('../auth-check/auth')
const router=express.Router();

const multer=require('multer');


 var imageName=null;
const diskStoraage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'back-end/images')
    },
    filename:(req,file,cb)=>{
        imageName=`${file.originalname}${Date.now()}.${file.mimetype.split('/')[1]}`;
       if(file.mimetype.split('/')[0]=='image'){
           cb(null,imageName);
       }
       else{
           cb('Please Select Valid Image Format',null);
       }
    }

})


//Post Create Route
router.post('',authentication,multer({storage:diskStoraage}).single('img'),(req,res)=>{
    const imagePath=req.protocol+'://'+req.get('host')+'/back-end'+'/images'+'/'+imageName;
    postmodel.create({
        title:req.body.title,
        content:req.body.content,
        // _id:req.body._id,
        creator:req.add.id,
        image:imagePath
    }).then(data=>console.log('Data Added SuccessFully')).catch(err=>console.log(err));
    
    res.status(200).json({msg:'Added SuccesFully'});
    
});

//Handler for Editing the post by ID
router.patch('/:id',authentication,multer({storage:diskStoraage}).single('img'),(req,res,next)=>{
    
        var imagePath=req.body.img        
    if(req.file){
         imagePath=req.protocol+'://'+req.get('host')+'/back-end'+'/images'+'/'+imageName;    
    }
    imagePath=req.protocol+'://'+req.get('host')+'/back-end'+'/images'+'/'+imageName;;    
    const id=req.params.id;
    postmodel.updateOne({_id:id,creator:req.add.id},{
        title:req.body.title,
        content:req.body.content,
        creator:req.add.id,
        image:imagePath
    }).then((modifiedData)=>{
        if(modifiedData.nModified>0){
            res.status(201).json({
                'message':'PostUpdated Successfully' 
            })
        }
        res.status(400).json({
            'message':' You\'re are not authorised to edit'
        })        
    }).catch(err=>console.log(err));
});



//Get All Posts Route
router.get('',(req,res,next)=>{
    const pageSize=+req.query.pageSize;
    const currentPage=+req.query.currentPage;
    let dataFetched;
    const postQuery=postmodel.find();
    if(pageSize && currentPage){
        postQuery.skip(pageSize*(currentPage-1)).limit(pageSize);
    }
    postQuery
    .then(data=>{
        dataFetched=data; 
           return postmodel.count(); 
    }).then(count=>{
        res.status(200).json({
            'message':'Post Data Success',
            posts:dataFetched,
            postCount:count
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



module.exports=router;