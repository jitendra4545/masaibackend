

const express=require('express')
const productRouter=express.Router()
const app=express()
const {ProductModel}=require('../model/productModel')
const jwt = require('jsonwebtoken');
const { authenticate } = require('../middlewarw/Authentication');

app.use(express.json())



productRouter.get('/',async(req,res)=>{
   //const token=req.headers.authorization
    try{
       
        let data=await ProductModel.find()
        res.send(data)
    }catch(err){
res.send('error in finding data')
    }
})


productRouter.post("/add",async(req,res)=>{
    let skel=req.body
    let token=req.headers.authorization
    console.log(token)
    try{
        jwt.verify(token, 'fw19', (err, decoded)=> {
            console.log(decoded) // bar
          });
       let data =new ProductModel(skel)
       data.save()
      res.send(data)
    }catch(err){
        res.send('error in finding data')
    }

})


productRouter.patch("/update/:id",async(req,res)=>{
      let payload=req.body
      let id=req.params.id
      //console.log(payload,id)
      try{
         let data= await ProductModel.updateOne({"_id":id},{$set:{"name":payload.name,"price":payload.price,"quantity":payload.quantity,"description":payload.description}})
         res.send(data)

      }catch(err){
        res.send('error in finding data')
      }
})



productRouter.delete('/delete/:id',async(req,res)=>{
    let id=req.params.id
    try{
     let data=await ProductModel.remove({"_id":id})
     res.send(data)
    }catch(err){
        res.send('error in finding data')
    }
})


module.exports={
    productRouter
}