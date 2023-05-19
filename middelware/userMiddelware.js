var jwt = require('jsonwebtoken');
const User = require("../models/user");

function userMiddelware(req,res,next){
    jwt.verify(req.headers.authorization, process.env.SECRET_KEY, function(err, decoded) {
        if(err){
            res.json({error:"authorization faild "})
        }else{
           let user=  User.find({email:decoded.email})
           if(user){
            next()
           }
        }
      });
    console.log('ami middelware')
}
module.exports =userMiddelware;