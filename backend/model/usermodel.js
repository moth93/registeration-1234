const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
   {name:String,
    role:{type:String,enum:["user","admin"],default:"user"},
    email:String,
    password:String,
    image:String
   }
)
module.exports=mongoose.model("users",userSchema)