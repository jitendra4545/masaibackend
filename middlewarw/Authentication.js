const jwt = require("jsonwebtoken")
require("dotenv").config();
const authenticate=(req,res,next)=>{
const token=req.headers.authorization
if(token){
const decoded=jwt.verify(token,"web19")
if(decoded){
const userID=decoded.userID
console.log("after decoding the token",userID)
req.body.authorID=userID
next()
} else {
res.send("Please Login First")
}
} else {
res.send("Please Login First")
}
}
module.exports={
authenticate
}