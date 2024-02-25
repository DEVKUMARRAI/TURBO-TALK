import mongoose from 'mongoose'

const connectToDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('Connected To DB');
    }
    catch (err){
        console.log("Error Connecting To DB",err);
    }
}

export default connectToDB;