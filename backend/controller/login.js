const user = require('../models/register');

exports.loginUser = user.login= async (userEmail,password) => {
  try{  
    const existinguser =await user.findOne({email:userEmail}) ;
    return existinguser;
} catch(err){
throw new Error(err);
}
};



