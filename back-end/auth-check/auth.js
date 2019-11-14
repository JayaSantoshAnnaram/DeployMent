const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(' ')[1];
      const decodedToken= jwt.verify(token,'SecretKey');
      //adding the decoded token inforamtion to request object
      req.add=decodedToken;
        next();    
    }
    catch(err){
        res.status(401).json({
            'msg':'Not Authenticated'
        })
    }
}
