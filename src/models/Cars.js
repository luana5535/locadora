const mongoose = require('mongoose');

const CarsSchema = new mongoose.Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    placa: { type: String, required: true },
    ano: { type: Number, required: true },
    preço: { type: Number, required: true },
    vendido: {type: Boolean, default: false},
    comprador: {type: String, default: null}
});

const Cars = mongoose.model('Cars', CarsSchema);

module.exports = Cars
