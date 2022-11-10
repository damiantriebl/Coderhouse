import * as Mongoose from "mongoose";
  
const UsuarioSchema = new Mongoose.Schema({
    email: String,
    password: String,
    edad: Number,
    direccion: String,
    telefono: String,
    foto: String,
    dateOfJoining: {
        type: Date,
        default: new Date(),
    },
    lastUpdated: {
        type: Date,
        default: new Date(),
    },
});
  
export default UsuarioSchema;