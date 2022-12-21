const Mongoose = require('mongoose');
const dotenv = require('dotenv')
const {usuarioModel, productosModel, CarroModel} = require('../model/all.model.js');
dotenv.config()

let database;
const connect = () => {
    // Add your own uri below, here my dbname is UserDB
    // and we are using the local mongodb
//    const url = process.env.MONGO_URI;
    const url = "mongodb+srv://damian:05550Kayak@cluster1.mqi7dv8.mongodb.net/ecommerce"
  
    if (database) {
        return;
    }
    // In order to fix all the deprecation warnings, 
    // below are needed while connecting
    Mongoose.connect(url);
  
    database = Mongoose.connection;
  
  
    return {
        usuarioModel,
        productosModel,
        CarroModel
    };
};
  
// Safer way to get disconnected
const disconnect = () => {
    if (!database) {
        return;
    }
  
    Mongoose.disconnect();
};
module.exports = {connect, disconnect}