import onderDaoMongo from '../persistencia/ordernesMongo.js';

import { PERSISTENCIA_PRODUCTOS, RUTA_PRODUCTOS } from '../config.js'


let ordenDao
switch (PERSISTENCIA_PRODUCTOS) {
    case 'MONGO':
        ordenDao = new onderDaoMongo()
        break
    default:
      //  ordenDao = new carroMemoria(RUTA_PRODUCTOS)
}

export function getOrdenDao() {
    return ordenDao
}