const express =require ('express');
const router = express.Router()
const cors=require('cors')
const Astro=require('../model/userastro')
const app = express();
app.use(cors())



router.get('/astro',(req,res,next)=>{
   Bill.find((err,astro)=>{
       if(err){
           res.json(err)

       }
       else{
           res.json(astro)
       }
   })

});


router.post('/astro',(req,res,next)=>{
    var newAstro= new Astro({
        astroName:req.body.astroName,
    astroDesc:req.body.astroDesc,
    astroStone:req.body.astroStone
    });
    newAstro.save((err,astro)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json({msg:'Item has been added to db'})
        }
    })
    

})



router.put('/astro/:id',(req,res,next)=>{
    AStro.findOneAndUpdate({_id:req.params.id},{
        $set: {
            astroName:req.body.astroName,
            astroDesc:req.body.astroDesc,
            astroStone:req.body.astroStone,
            provider:req.body.provider

        }
    },
    function(err,astro){
        if(err){
            res.json(err);
        }
        else{
            res.json(astro);
        }
    

});
})



router.delete('/astro/:id',(req,res,next)=>{
    Astro.remove({_id:req.params.id},(err,astro)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(astro)
        }

    })
    

})



module.exports = router;
