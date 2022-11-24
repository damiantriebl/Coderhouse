import carroMongo from '../persistencia/carroMongo.js';

import { PERSISTENCIA_PRODUCTOS, RUTA_PRODUCTOS } from '../config.js'


let productoDao
switch (PERSISTENCIA_PRODUCTOS) {
    case 'MONGO':
        productoDao = new carroMongo()
        break
    default:
      //  productoDao = new carroMemoria(RUTA_PRODUCTOS)
}

export function getproductoDao() {
    return productoDao
}
