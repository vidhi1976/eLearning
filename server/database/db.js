import mongoose from "mongoose";
const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
        
    }
    catch(error){
        console.log('error' , error);
        
    }
}
export default connectDb;