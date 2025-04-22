const mongoose=require('mongoose');
const MenuSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number
    },
    taste:{
        enum:['spicy']
    },
    isdrink:{
type:Boolean,
require:true
    },
    ingredients:{
        enum:['chicken wing ','spices','sauce']
    },
    numofsell:{
        type:Number,
        require:true
    }
})
const Menu=mongoose.model('menu',MenuSchema)
module.exports=Menu;