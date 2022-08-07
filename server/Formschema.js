const mongoose=require("mongoose")

const userdetails=mongoose.Schema({
    Image:String,
    Location:String,
    Name:String,
    Description:String
})
const user=mongoose.model("Users",userdetails)
module.exports=user