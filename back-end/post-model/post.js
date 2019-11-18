const mongoose =require('mongoose');

//Schema Defination
const postSchema= mongoose.Schema({
    title:{
        type :String,
        unique:true
    },
    content:{
        type :String,
        unique:true
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserModel',
        required:true
    },
    image:{
        type:String
    }
});

//Model
const postModel=mongoose.model('postModel',postSchema);


module.exports=postModel;