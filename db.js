const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://shabeera:Shabeera@post.69hix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log("connection is successfull")
}).catch((e)=>{
    console.log("no connection")
})