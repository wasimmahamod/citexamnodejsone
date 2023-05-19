var jwt = require('jsonwebtoken');
const User = require("../../models/user");

async function verifyControllers(req,res){
    var decoded = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    let updateUser = await User.findOneAndUpdate({email:decoded.email},{verify:true},{new:true})
    res.send(updateUser)
}

module.exports=verifyControllers;