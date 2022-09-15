import express from 'express';
import Contenedor from './daos/productos/productosDaoArchivos.js';

const router = express.Router();
const objProducto = new Contenedor('./productos.json')

router.get('/api/archivos/productos', async (req, res) =>{
    const todosProductos = await objProducto.getAll('productos');
    res.json(todosProductos)
});

router.get('/api/archivos/productos/:id', async (req, res)=> {
    const idReq = req.params.id
    const produtoId = await objProducto.getById(+idReq);
    res.json(produtoId);
})

router.post('/api/archivos/productos', async (req, res) => {
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

router.put('/api/archivos/productos/:id', async (req, res) => {
    const productoCreado = await objProducto.updateById(req.params.id, req.body);
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

router.delete('/api/archivos/productos/:id', async (req, res) => {
    console.log('se borra')
    const productoCreado = await objProducto.deleteById(+req.params.id);
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

export {router as ProductosArchivosRouter}