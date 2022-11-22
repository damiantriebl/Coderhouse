import { model } from "mongoose";
import CarroSchema from "./carro.schema.js";
import ProductosSchema from "./productos.schema.js";
import UsuarioSchema from "./usuarios.schema.js";

export const usuarioModel = model("usuarios",
UsuarioSchema
)
export const productosModel = model("productos",
ProductosSchema
)
export const CarroModel = model("carro",
CarroSchema
)