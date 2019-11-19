const mongoose =require('mongoose');

//Schema Defination
const postSchema= mongoose.Schema({
    title:{
        type :String,
        
    },
    content:{
        type :String,
        
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserModel'
    },
    image:{
        type:String
    }
});

//Model
const postModel=mongoose.model('postModel',postSchema);


module.exports=postModel;