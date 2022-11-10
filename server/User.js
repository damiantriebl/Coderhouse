import express from 'express';

const router = express.Router();

router.get('/api/user', (req, res) => {
    res.send('aca va a estar listado el usuario');
})

router.post('/api/login', (req, res) => {
    const {email, password} = req.body;
    console.log(`se pidio un ingreso con ${email}, ${password}`)
    res.send(`se pidio un ingreso con ${email}, ${password}`);
})
router.post('/api/singup', (req, res) => {
    const {email, password, edad, direccion, nombre} = req.body;
    console.log(`se pidio un ingreso con ${email}, ${password}  ${edad}, ${direccion}, ${nombre}`)
    res.send(`se pidio un ingreso con ${email}, ${password}`);
})

export {router as UserRouter}
