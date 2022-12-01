import express from 'express';
import userNormalizer from '../negocio/userNormalizer.js';
import multer from 'multer';
import storage from '../config/multerConfig.js';
import jwt from 'jsonwebtoken'
const router = express.Router();

const PRIVATE_KEY = 'SECRETO'
const upload = multer({ storage })

const generarToken = (user) => {
    const token = jwt.sign({data: user}, PRIVATE_KEY, {expiresIn: '24h'})
    return token
  }
router.get('/api/user', (req, res) => {
    res.send('aca va a estar listado el usuario');
})

router.get('/api/logout',  async (req, res, next) => {
    req.session.destroy(function (err) {
        res.send('se deslogeo'); //Inside a callback… bulletproof!
      });
})

router.post('/api/signup',upload.single("file"), async (req, res, next) => {
    const data = {...req.body, avatar: req.file.filename}
    const respuesta = await new userNormalizer().guardarUsuario(data);
    console.log(respuesta);
    res.json(respuesta)   
})

export {router as UserRouter}
