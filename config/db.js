const mongoose = require('mongoose');

const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (err){
        console.log(" DB is not connected:", err.message);
        
        return false;
    }
}

module.exports = connectDB;