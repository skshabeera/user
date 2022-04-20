const mongoose =require("mongoose")
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    houseNumber:{
        type:String
    }
})
const User= new mongoose.model("Post",userSchema)

module.exports = User
