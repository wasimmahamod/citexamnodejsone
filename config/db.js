const mongoose = require('mongoose');

function dbConnection(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Db Connected!'));
}

module.exports=dbConnection;