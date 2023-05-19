const express =require('express')
const router = express.Router()
const authantication = require('./auth.js')


router.use('/auth',authantication)

module.exports=router;