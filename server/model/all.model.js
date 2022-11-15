import { model } from "mongoose";
import ProductosSchema from "./productos.schema.js";
import UsuarioSchema from "./usuarios.schema.js";

export const usuarioModel = model("usuarios",
UsuarioSchema
)
export const productosModel = model("productos",
ProductosSchema
)