const users=require("../model/usermodel")
const bcrypt=require ("bcrypt")
const jwt=require ("jsonwebtoken")

exports.register=async(req,res)=>{
try { 
    const userfound=await users.findOne({email:req.body.email})
    if(userfound) { 
        res.status(400).send({msg:"user exists"})} 
    else 
    { const userNew=new users(req.body)
        const hpassword=bcrypt.hashSync(req.body.password,10)
        userNew.password=hpassword
      const token=jwt.sign({id:userNew._id}, "123456")
       await userNew.save()
    res.status(200).send({msg:"user added",user:userNew,token:token})}
} catch (error) {
    res.status(500).send({msg:"user not added",error:error})
}
}