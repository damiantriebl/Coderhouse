import express from 'express';
import Contenedor from './daos/carritos/carritosDaoArchivos.js'

const router = express.Router();
const objCarro = new Contenedor('./carro.json')

router.get('/api/archivos/carro', async (req, res) =>{
    const todosProductos = await objCarro.getAll();
    res.json(todosProductos)
});

router.get('/api/archivos/carro/:id', async (req, res)=> {
    const idReq = req.params.id
    const produtoId = await objCarro.getById(+idReq);
    res.json(produtoId);
})

router.post('/api/archivos/carro', async (req, res) => {
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
            mensaje: 'El post no se agrego por que el objeto esta vacio',
            error: 'No se pudo enviar el post',
            id: productoCreado
        })
    }
})

router.put('/api/archivos/carro/:id', async (req, res) => {
    const productoCreado = await objCarro.updateById(req.params.id, req.body);
    if (productoCreado.length > 0){
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

router.delete('/api/archivos/carro/:id', async (req, res) => {
    console.log('se borra')
    const productoCreado = await objCarro.deleteById(+req.params.id);
    if (productoCreado.length > 0){
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

export {router as CarroArchivosRouter}