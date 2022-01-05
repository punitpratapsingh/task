const mongoose=require('mongoose')
let Schema=mongoose.Schema({
    key:{
        type:String
    },
    count:{
        type:Array
    },
    value:
    {
        type:String
    }
},{timestamps:true})
module.exports= mongoose.model('Record',Schema)