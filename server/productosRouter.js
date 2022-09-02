const express = require('express');
const HandlerDB = require("./containerDB.js")

const { optionsMariaDB } = require('./options/conexionMariaDB.js')
const { optionsSqlite3 } = require('./options/conexionSqlLite.js')

const knexMariaDB = require('knex')(optionsMariaDB)
const knexSqlite3 = require('knex')(optionsSqlite3)

const objProducto = new HandlerDB(knexMariaDB,'productos')
const objMensaje = new HandlerDB(knexSqlite3,'messages')

const router = express.Router();
router.get('/api/productos', async (req, res) =>{
    const todosProductos = await objProducto.getAll('productos');
    res.json(todosProductos)
});

router.get('/api/productos/:id', async (req, res)=> {
    const idReq = req.params.id
    const produtoId = await objProducto.getById(+idReq);
    res.json(produtoId);
})

router.post('/api/productos', async (req, res) => {
    const productoCreado = await objProducto.save(req.body);
    if (productoCreado > 0){
        res.json({
            ok: true,
            mensaje: 'El Post se agrego correctamente',
            id: productoCreado
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'El post no se agrego por que el objeto esta vacio',
            error: 'No se pudo enviar el post',
            id: productoCreado
        })
    }
})

// se puede hacer por postman con put, pero por el formulario se puede hacer unicamente por post ya que HTML soporta solo GET y POST
router.put('/api/productos/:id', async (req, res) => {
    const productoCreado = await objProducto.updateById(req.params.id, req.body);
    if (productoCreado > 0){
        res.json({
            ok: true,
            mensaje: 'El Post se edito correctamente',
            id: productoCreado
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'El post no se pudo editar ',
            error: 'producto no encontrado',
            id: productoCreado
        })
    }
})

//////////////////////////////////////////////////////////////////////////////////////////////////
// SI ENTRA A /editar/:id hay un cliente que se accede para modificar los datos
////////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/api/productos/:id', async (req, res) => {
    const productoCreado = await objProducto.saveById(req.body);
    if (productoCreado > 0){
        res.json({
            ok: true,
            mensaje: 'El Post se edito correctamente',
            id: productoCreado
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'El post no se pudo editar ',
            error: 'producto no encontrado',
            id: productoCreado
        })
    }
})
// solo se puede acceder por POSTMAN
router.delete('/api/productos/:id', async (req, res) => {
    console.log('se borra')
    const productoCreado = await objProducto.deleteById(+req.params.id);
    if (productoCreado > 0){
        res.json({
            ok: true,
            mensaje: 'El Post se borro correctamente',
            id: productoCreado
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'No se ejecuto el proceso',
            error: 'producto no encontrado',
            id: productoCreado
        })
    }
})

module.exports = {router }