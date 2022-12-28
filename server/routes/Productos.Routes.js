import express from 'express';
import productosNormalizer from '../negocio/productosNormalizer.js'
const router = express.Router();



router.get('/api/productos', async (req, res) => {
    const respuesta = await new productosNormalizer().cargarTodosLosProductos();
    res.json(respuesta);
})

router.put('/api/productos/:id', async (req, res) => {
    const productoCreado = await  new productosNormalizer().updateById(req.params.id, req.body);
    if (!productoCreado?.error){
        res.json({
            ok: true,
            mensaje: 'El Post se edito correctamente',
            id: productoCreado
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'El post no se pudo editar ',
            error: productoCreado?.error,
        })
    }
})

router.delete('/api/productos/:id', async (req, res) => {
    console.log('se borra')
    const productoCreado = await objProducto.deleteById(req.params.id);
    if (!productoCreado?.error){
        res.json({
            ok: true,
            mensaje: 'El Post se borro correctamente',
            id: productoCreado
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'No se ejecuto el proceso',
            error: productoCreado?.error,
        })
    }
})

export {router as ProductosRouter}
