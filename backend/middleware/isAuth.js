const jwt=require('jsonwebtoken')
const usermodel = require('../model/usermodel')



exports.isauth=async(req,res,next)=>{
  const token=req.header('token')
  try {
    const decode=jwt.verify(token,"123456")
    if(!decode){res.status(400).send({msg:"not auth"})}
      const user= await usermodel.findById(decode.id)
    res.status(200).send({msg:"is auth",user:user})
    next() 
  } catch (error) {
    console.log(error)
  }
}