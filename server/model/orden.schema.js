import * as Mongoose from "mongoose";  
  
const OrdenSchema = new Mongoose.Schema({
    usuario: Object,
    orden: Object,
    usuarioId: String,
    dateOfJoining: {
        type: Date,
        default: new Date(),
    },
    lastUpdated: {
        type: Date,
        default: new Date(),
    },
});
  
export default OrdenSchema;
