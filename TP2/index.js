const Contenedor = require('./Contenedor');

const negocio  = new Contenedor('./TP2/productos.txt');

negocio.save({title: 'alpargata azul', price: 5090, thumbnail: 'http....'});
//negocio.getById(2);
//negocio.getAll();
//negocio.deleteById(1);
//negocio.deleteAll();