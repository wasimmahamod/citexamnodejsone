const express = require('express')
const routes= require('./routes')
require('dotenv').config()
const dbConnection = require('./config/db')
const app= express()
dbConnection()

app.use(express.json())
app.use(routes)

app.listen(8000,function(){
    console.log('Server is Running ')
})