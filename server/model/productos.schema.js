import * as Mongoose from "mongoose";
  
const ProductosSchema = new Mongoose.Schema({
    id: Number,
    _id: String,
    productos: String,
    precio: String,
    thumbnail: String,
    dateOfInsert: {
        type: Date,
        default: new Date(),
    },
    lastUpdated: {
        type: Date,
        default: new Date(),
    },
});
  
export default ProductosSchema;