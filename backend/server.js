const express=require("express")
const databaseEx = require("./configuration/config")
const routerUser = require("./router/routerUser")

const app=express()
const port=2023
app.use(express.json())

databaseEx()



app.use('/user',routerUser)
app.listen(port,console.log("server is running"))








