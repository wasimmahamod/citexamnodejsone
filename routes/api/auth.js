const express =require('express');
const singupControllers = require('../../controllers/authControllers/singupControllers');
const userControllers = require('../../controllers/userControllers/userControllers');
const verifyControllers = require('../../controllers/authControllers/verifyControllers');
const userMiddelware = require('../../middelware/userMiddelware');
const router = express.Router()

router.post('/singup',singupControllers)
router.get('/users',userMiddelware,userControllers)
router.get('/verify',verifyControllers)

module.exports=router;