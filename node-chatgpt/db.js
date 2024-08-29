const mongoose =require('mongoose');

const uri = 'mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.12';

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected sucessfully');
    }catch(error){
        console.error('Error Connecting to MongoDB', error.message);
    }
};

module.exports = connectDB;