const mongoose=require('mongoose');
const colors=require('colors');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database Connected..${mongoose.connection.host}`.bgGreen.white);
    }catch(err){
        console.log(err.bgRed.white);
    }
}
module.exports=connectDB;