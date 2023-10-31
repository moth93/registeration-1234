const express=require("express")
const { register } = require("../controler/controlerUser")
const { isauth } = require("../middleware/isAuth")
const { validationRegistration, errorRegistration } = require("../middleware/validation")



const routerUser=express.Router()
routerUser.post('/adduser',validationRegistration,errorRegistration,register)
routerUser.get('/curent',isauth,(req,res)=>{
    res.send({user:decode})
})
module.exports = routerUser