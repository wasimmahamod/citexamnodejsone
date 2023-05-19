var jwt = require('jsonwebtoken')
function token(email){
    var token = jwt.sign({ email}, 'shhhhh');
    return token
}

module.exports=token;