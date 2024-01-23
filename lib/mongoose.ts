import mongoose from 'mongoose';

let isConnected=false;

export const connectToDB=async ()=>{
    mongoose.set('strictQuery',true);
    if(!process.env.MONGODB_URL)return console.log('Mongo_URL is not found');
    if(isConnected)return console.log('Already Connected to MongoDb');
    
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected=true;

        console.log('connected to Mongodb');
    }catch(error){
        console.log(error);
    }
}  