import express from 'express';
import Contenedor from './Contenedor.js';

const router = express.Router();
const carro = new Contenedor('./carro.json')


router.post('/api/carro', async (req, res) => {
    console.log('paso por el carro?')
    const productoCreado = await carro.save(req.body);
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
router.get('/api/carro/:idUsuario', async (req, res) =>{   
    console.log('se llego al carro', req.params.idUsuario)
    const todosProductos = await carro.getByUserId(+req.params.idUsuario);
    res.json(todosProductos)
});
export {router as carroRouter}