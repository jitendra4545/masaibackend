const express=require('express')
const app=express()
const {connecting}=require('./db')
const {productRouter}=require('./routes/productRoutes')
const {loginReducer}=require('./routes/LoginReducer')
const { authenticate } = require('./middlewarw/Authentication')

app.use(express.json())

app.use('/',loginReducer)
app.use(authenticate)
app.use('/product',productRouter)

app.listen(4600,async()=>{
    try{
        await connecting
        console.log('connecting to DB')
    }catch(err){
       console.log('connection failed')
    }
    console.log('server running on port 4600')
})