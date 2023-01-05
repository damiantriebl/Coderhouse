import { model } from "mongoose";
import CarroSchema from "./carro.schema.js";
import ComentariosSchema from "./comentarios.schema.js";
import OrdenSchema from "./orden.schema.js";
import ProductosSchema from "./productos.schema.js";
import UsuarioSchema from "./usuarios.schema.js";

export const usuarioModel = model("usuarios",
UsuarioSchema
)
export const productosModel = model("productos",
ProductosSchema
)
export const carroModel = model("carro",
CarroSchema
)
export const comentariosModel = model("comentarios",
ComentariosSchema
)
export const ordenesModel = model("ordenes",
OrdenSchema
)