const express =require('express')
const router = express.Router()
const apiUrl = '/api/v1';
const apiRoutes = require('./api')

router.use(apiUrl,apiRoutes)
router.use(apiUrl,(req,res)=>res.send('No Route Found On this Url  '))

module.exports=router;