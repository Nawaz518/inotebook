const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/"
const connectToMongo=()=>{
    mongoose.connect(mongoURI).then((data)=>{
        console.log(`Mongodb connected:${data.connection.host}`)
    }).catch((err)=>{
        console.log("unable to connect")
    })
     }  
module.exports=connectToMongo;
