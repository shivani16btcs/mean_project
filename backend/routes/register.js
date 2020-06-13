const express = require('express');
const router = express.Router();

const registerController = require('../controller/register');

router.post('/register', async (req,res)=>{
    const user = await registerController.registerUser(req.body);
    if(user)
    {
        return res.json({
            success:true,
            message:user
        })
    }
    else
     res.status(404).json({
            success:false,
            message: `this user alresdy exist.`
        })
    });



module.exports = router;