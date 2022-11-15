import express from 'express';
import productosNormalizer from '../negocio/productosNormalizer.js'
const router = express.Router();



router.get('/api/productos', async (req, res) => {
    const {email, password} = req.body;
    const respuesta = await new productosNormalizer().cargarTodosLosProductos();
    res.json(respuesta);
})


export {router as ProductosRouter}
