import express from 'express';
import upload from '../helpers/upload.js';
import userNormalizer from '../negocio/userNormalizer.js';
import fs from 'fs'
const router = express.Router();

router.get('/api/user', (req, res) => {
    res.send('aca va a estar listado el usuario');
})

router.post('/api/login', async (req, res) => {
    const {email, password} = req.body;
    const respuesta = await new userNormalizer().cargarUsuario(req.body);
    res.json(respuesta);
})
router.post('/api/singup', upload.single('image'),  (req, res) => {
    if (!req.file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
      }
    var encode_image = img.toString('base64');
      return next(error)
    // Define a JSONobject for the image attributes for saving to database
     
    var finalImg = {
         contentType: req.file.mimetype,
         image:  new Buffer(encode_image, 'base64')
      };
      console.log(finalImg)
    const {email, password, edad, direccion, nombre} = req.body;
    const respuesta = new userNormalizer().guardarUsuario(req.body);
    console.log(respuesta)
    console.log(`se pidio un ingreso con ${email}, ${password}  ${edad}, ${direccion}, ${nombre}`)
    res.send(`se da una respuesta`);
})

export {router as UserRouter}
