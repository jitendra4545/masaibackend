const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:String,
    pass:String,
    email:String,
    mob:Number
},{
    versionKey:false
})



const UserModel=mongoose.model("loginCredential",userSchema)

module.exports={
    UserModel
}