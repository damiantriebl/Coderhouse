
import * as dotenv from "dotenv";
dotenv.config();

export const PERSISTENCIA_PRODUCTOS = process.env.ENVIROMENT === 'DEV' ? 'FILE' : 'MONGO'
export const RUTA_PRODUCTOS = './db/productos.json'
