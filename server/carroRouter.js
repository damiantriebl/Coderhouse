const express = require('express');
const HandlerDB = require("./containerDB.js")

const { optionsMariaDB } = require('./options/conexionMariaDB.js')

const knexMariaDB = require('knex')(optionsMariaDB)
const routerCarro = express.Router();
const objCarro = new HandlerDB(knexMariaDB,'carro')


routerCarro.post('/api/carro', async (req, res) => {
    console.log('paso por el carro?')
    const productoCreado = await objCarro.save(req.body);
    if (productoCreado > 0){
        res.json({
            ok: true,
            mensaje: 'El Post se agrego correctamente',
            id: productoCreado
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'El producto no se agrego al carro por que el objeto esta vacio',
            error: 'No se pudo enviar el post',
            id: productoCreado
        })
    }
})
routerCarro.delete('/api/carro/:id/:idUsuario', async (req, res) => {
    console.log('se borro?', req.params.id,req.params.idUsuario)
    const productoCreado = await objCarro.deleteByUserAndIdProducto(req.params.id, req.params.idUsuario);
    if (productoCreado > 0){
        res.json({
            ok: true,
            mensaje: 'El producto del carro se elimino correctamente',
            id: productoCreado
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'El producto del carro no se pudo borrar por que el objeto esta vacio',
            error: 'No se puede borrar',
            id: productoCreado
        })
    }
})
routerCarro.get('/api/carro/:idUsuario', async (req, res) =>{   
    console.log('levanto el carro')
    const todosProductos = await objCarro.getByUserId(+req.params.idUsuario);
    res.json(todosProductos)
});

module.exports = {routerCarro}