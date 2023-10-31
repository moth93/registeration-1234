const mongoose=require("mongoose")

const databaseEx=async()=>{
    try {
        await mongoose.connect("mongodb+srv://othmanmanel1993:zIRAvswByjZOwqu8@cluster0.uzy8fcu.mongodb.net/?retryWrites=true&w=majority") 
   console.log("db connected")
    } catch (error) {
        console.log(error,"db is not connected")  
    }
}
module.exports=databaseEx