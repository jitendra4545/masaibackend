
const jwt=require('jsonwebtoken')

const express=require('express')
const {UserModel}=require('../model/AuthModel')
const loginReducer=express.Router()
const app=express()


app.use(express.json())


loginReducer.post('/register',async(req,res)=>{
   let data=req.body
//    console.log(data)
try{

    let newData=new UserModel(data)
    await newData.save()
    res.send(newData)
}catch(err){
 res.send('Data not added')
}
})


loginReducer.post('/login',async(req,res)=>{
    let data=req.body
    console.log(data)
    try{
       let newData=await UserModel.find({email:data.email,pass:data.pass})
       if(newData.length>0){
        let token=jwt.sign({masai:"school"},"web19")
        res.send(`User Login Success  token ${token}`)
       }else{
        res.send('user login failed')
       }
    }catch(err){

    }
})


module.exports={
    loginReducer
}