const mongoose=require('mongoose')
var Schema = mongoose.Schema;


const userAstroSchema=new Schema({
    astroName:{
        type:String,
        required:true
    },
    astroDesc:{
        type:String,
        required:true
    },
    astroStone:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    }

});
var Astro = module.exports=mongoose.model('Astro', userAstroSchema );