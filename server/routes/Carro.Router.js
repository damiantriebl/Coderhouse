import express from 'express';
import carroNormalizer from '../negocio/carroNormalizer.js'

const router = express.Router();
router.get('/api/carro', async (req, res) =>{
    const todosCarritos = await new carroNormalizer().getAll();
    if (!todosCarritos?.error){
        res.json({
            ok: true,
            mensaje: 'se leen todos los post correctamente',
            carro: todosCarritos
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'fallo la lectura',
            error: todosCarritos.error,
        })
    }
});

router.get('/api/carro/:id', async (req, res)=> {
    const idReq = req.params.id
    const carritoId = await objCarrito.getById(idReq);
    res.send(carritoId);
})

router.post('/api/carro/:id/', async (req, res) => {
    console.log(req.params)
    console.log(req.body)
    const productoCarro = await  new carroNormalizer().guardarcarro(req.params.id, req.body);
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

router.put('/api/carro/:id', async (req, res) => {
    const carritoCreado = await objCarrito.updateById(req.params.id, req.body);
    if (!carritoCreado?.error){
        res.json({
            ok: true,
            mensaje: 'El Post se edito correctamente',
            id: carritoCreado
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'El post no se pudo editar ',
            error: carritoCreado?.error,
        })
    }
})

router.delete('/api/carro/:id', async (req, res) => {
    console.log('se borra')
    const carritoCreado = await objCarrito.deleteById(req.params.id);
    if (!carritoCreado?.error){
        res.json({
            ok: true,
            mensaje: 'El Post se borro correctamente',
            id: carritoCreado
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'No se ejecuto el proceso',
            error: carritoCreado?.error,
        })
    }
})

export {router as CarritoRouter}