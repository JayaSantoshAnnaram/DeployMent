const mongoose=require('mongoose');

const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const routes=require('./routes/posts-routes');
const userRoutes=require('./routes/user-routes');
const dotenv=require('dotenv');
const path=require('path');

mongoose.connect('mongodb+srv://MEANMEAN:ajsajs*830*001@cluster0-7dbb8.mongodb.net/Post?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>console.log('DB Connected SuccesSfully'))
.catch((err)=>{console.log('ERROR Occured In DB Connection',err)});

// var post=[
//     {id:'sfsfsfs',title:'First Post Title',content:'First Post Content'},
//     {id:'fsfsf',title:'Second Post Title',content:'First Post Content !!!!'},
//     {id:'njnfs',title:'Third Post Title',content:'!!!!1First Post Content'},
// ];
    var posts=[];

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:false}))

    // sending the static image files
    app.use('/images',express.static(path.join('back-end/images')));

    // Used for sending static files
//  app.use('/',express.static(`${__dirname}//dist//AngularMean`));

 
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,authorization,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,OPTIONS");
    next();
});



app.use('/api/post',routes);
app.use('/api/user',userRoutes);
// app.use((req,res)=>{
//     console.log(`${__dirname}//dist//AngularMean//index.html`);
//     res.sendFile(`${__dirname}//dist//AngularMean//index.html`);
    
// });

module.exports=app;
