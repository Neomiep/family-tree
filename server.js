const express = require('express')
const app = express()
let User = require('./Models/User')
const bodyParser = require("body-parser")
const mongoose = require ("mongoose")

mongoose.connect("mongodb://localhost/clientDB", function(){
    console.log("Connected")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

let userApi = require("./Api/userApi") 
app.use("/userData", userApi)

app.listen(4000)