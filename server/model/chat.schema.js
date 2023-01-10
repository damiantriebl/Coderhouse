import * as Mongoose from "mongoose";
  
const ChatsSchema = new Mongoose.Schema({  
    nombre: String,
    email: String,
    listaComentada: Array,
    dateOfInsert: {
        type: Date,
        default: new Date(),
    },
    lastUpdated: {
        type: Date,
        default: new Date(),
    },
});
const ChatSchema = new Mongoose.Schema({  
    id:Number,
    nombre: String,
    texto: String,
    dateOfInsert: {
        type: Date,
        default: new Date(),
    },  
});
  
export default ChatsSchema;
