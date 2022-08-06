import express from 'express';
import Contenedor from './Contenedor.js';

const router = express.Router();
const productos = new Contenedor('./tp5/productos.json')





router.post('/api/productos', async (req, res) => {
    console.log('el req', req.body)
    const productoCreado = await productos.save(req.body);
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


export {router as produtosRouter}