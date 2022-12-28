import * as Mongoose from "mongoose";
  
const ComentariosSchema = new Mongoose.Schema({  
    id:Number,
    nombre: String,
    titulo: String,
    comentario: String,
    tipo: String,
    dateOfInsert: {
        type: Date,
        default: new Date(),
    },
    lastUpdated: {
        type: Date,
        default: new Date(),
    },
});
  
export default ComentariosSchema;
