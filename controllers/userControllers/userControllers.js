const User = require("../../models/user");

async function userControllers(req,res){
    let data =await User.find({})
    res.send(data)
}

module.exports=userControllers;