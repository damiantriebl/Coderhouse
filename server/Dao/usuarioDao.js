import carroMongo from '../persistencia/carroMongo.js';

import { PERSISTENCIA_PRODUCTOS, RUTA_PRODUCTOS } from '../config.js'


let usuarioDao
switch (PERSISTENCIA_PRODUCTOS) {
    case 'MONGO':
        usuarioDao = new carroMongo()
        break
    default:
      //  usuarioDao = new carroMemoria(RUTA_PRODUCTOS)
}

export function getusuarioDao() {
    return usuarioDao
}
