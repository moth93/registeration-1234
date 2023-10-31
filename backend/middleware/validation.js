const {validationResult, body}=require ("express-validator")

exports.validationRegistration=[
    body("email","please check your email").isEmail(),
    body("password","minimum 4 caracters").isLength({min:4})
] 
exports.errorRegistration=(req,res,next)=>{
    const errors=validationResult(req)
 if(!errors.isEmpty()){
    res.status(400).send({errors:errors.array()})
 }
 next()
}