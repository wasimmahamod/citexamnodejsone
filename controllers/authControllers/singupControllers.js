const emailTemplate = require('../../helpars/emailTemplate.js');
const emailVelidation = require('../../helpars/emailVelidation.js');
const emailVerification = require('../../helpars/emailVerification.js');
const User = require('../../models/user.js')
const bcrypt = require('bcrypt');
const token = require('../../token/token.js');

async function singupControllers (req,res){
    let {fname,lname,email,password}=req.body;
    if(!fname){
      return  res.json({error:"First Name is Required"})
    }
    if(!lname){
      return  res.json({error:"Last Name is Required"})
    }
    if(emailVelidation(email)){
        return  res.json({error:"Invalid Email"})
    }
    let existingUser=await User.find({email:email});
    if(existingUser.length>0){
        return  res.json({error:"Email already in use "})
    }
    
    bcrypt.hash(password, 10, function(err, hash) {
  
        let user= new User({
            fname,
            lname,
            email,
            password:hash,
        })
        let ttoken=token(email)
        user.save()
        emailVerification(user.email,emailTemplate(ttoken))
        res.send(user)
    });


}

module.exports = singupControllers;