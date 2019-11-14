const mongoose=require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String
    }
});


userSchema.plugin(uniqueValidator)

const userModel=mongoose.model('UserModel',userSchema);


module.exports=userModel;