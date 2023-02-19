

const mongoose=require('mongoose')


const connecting=mongoose.connect('mongodb+srv://jitendra:jitendrakumarghadei@cluster0.e4vb2oc.mongodb.net/university?retryWrites=true&w=majority')


module.exports={
  connecting
}