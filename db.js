const mongoose=require('mongoose');
const mongoURI="mongodb+srv://faizzu438:LmN3pWZEVldriisa@cluster0.clv0gnm.mongodb.net/"
const connectToMongo=()=>{
    mongoose.connect(mongoURI).then((data)=>{
        console.log(`Mongodb connected:${data.connection.host}`)
    }).catch((err)=>{
        console.log("unable to connect")
    })
     }  
module.exports=connectToMongo;
