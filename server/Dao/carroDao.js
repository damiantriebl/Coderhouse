import carroMongo from '../persistencia/carroMongo.js';

import { PERSISTENCIA_PRODUCTOS, RUTA_PRODUCTOS } from '../config.js'


let carroDao
switch (PERSISTENCIA_PRODUCTOS) {
    case 'MONGO':
        carroDao = new carroMongo()
        break
    default:
      //  carroDao = new carroMemoria(RUTA_PRODUCTOS)
}

export function getcarroDao() {
    return carroDao
}
