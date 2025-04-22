 const mongoose =require('mongoose')
const UserSchema=new mongoose.Schema({
name:{
    type:String,
    require:true
},
age:{
    type:Number
},
work:{
    type:String,
    enum:['owner','chief','waiter'],
    require:true,
},
mobile:{
type:String,
required:true,
},
email:{
    type:String,
    require:true ,
    unique:true  
},
address:{
    type:String,

},
salary:{

    type:Number,
    require:true
}

})
// now create user model
const User=mongoose.model('User',UserSchema);
 module.exports=User;
