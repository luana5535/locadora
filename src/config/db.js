const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('MONGODB_URI=mongodb://localhost:27017/drivelux');
        console.log('MongoDB conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
};

module.exports = connectDB;
