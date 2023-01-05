import express from 'express';
import productosNormalizer from '../negocio/productosNormalizer.js'
const router = express.Router();



router.get('/api/productos', async (req, res) => {
    const respuesta = await new productosNormalizer().cargarTodosLosProductos();
    res.json(respuesta);
})
router.get('/api/productos/:parametro', async (req, res) => {
    let productos = []
    if(req.params.parametro.match(/^[0-9]{2}$/)) {
        // es una expresion regular tipica de ObjectID  en mongo
        productos = await  new productosNormalizer().cargarPorId(req.params.parametro);
    } else {
        productos = await  new productosNormalizer().cargarPorTipo(req.params.parametro);
    }
    res.json(productos) 
})
router.get('/api/productos/:tipo', async (req, res) => {
    const productosPorCategoria = await  new productosNormalizer().cargarPorTipo(req.params.tipo);
    res.json(productosPorCategoria) 
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
    const productoBorrado = await objProducto.deleteById(req.params.id);
    if (!productoBorrado?.error){
        res.json({
            ok: true,
            mensaje: 'El Post se borro correctamente',
            id: productoBorrado
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'No se ejecuto el proceso',
            error: productoBorrado?.error,
        })
    }
})

export {router as ProductosRouter}
