const express = require('express');
const router = express.Router();
const bcrypt=require('bcrypt');

const loginController = require('../controller/login');

router.post('/login', async (req,res,next)=>{
    try{
    const user = await loginController.loginUser(req.body.email,req.body.password);
    const passwordWasCorrect = await bcrypt.compare(req.body.password, user.password)
 
    if(user == null)
    { res.status(404).json({
        error:"user not found",
    });
    }
    
    else if(passwordWasCorrect){
        res.json({sucess:true});
    }
    else{
        res.status(404).json({
            error:"invalid login",
        });
    }
}catch(err){
        next(err);
    }
});


module.exports = router;