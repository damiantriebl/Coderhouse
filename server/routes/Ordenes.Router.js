import express from 'express';
import OrdenesNormalizer from '../negocio/OrdenesNormalizer.js'
const router = express.Router();


router.get('/api/ordenes/:id', async (req, res) => {
    console.log('dtcon ordenes', req.params)
    const ordenes = await  new OrdenesNormalizer().getAll(req.params.id);
    if (!ordenes?.error){
        res.json({
            ok: true,
            mensaje: 'El Post se edito correctamente',
            id: ordenes
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'El post no se pudo editar ',
            error: ordenes?.error,
        })
    }
})
router.post('/api/ordenes', async (req, res) => {
    console.log('dtcon ordenes', req.body)
    const ordenes = await  new OrdenesNormalizer().guardarOrden(req.body);
    if (!ordenes?.error){
        res.json({
            ok: true,
            mensaje: 'El Post se edito correctamente',
            id: ordenes
        })
    }else {
        res.json({
            ok: false,
            mensaje: 'El post no se pudo editar ',
            error: ordenes?.error,
        })
    }
})

export {router as OrdenesRouter}
