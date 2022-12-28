import express from 'express';
import userNormalizer from '../negocio/userNormalizer.js';
import multer from 'multer';
import storage from '../config/multerConfig.js';
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
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
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'xzavier5@ethereal.email',
            pass: 'wDSTAuz9GG1Zxvb28a'
        }}
    )
    const email = {
        from: "adidas 2022",
        to: "damiantriebl@gmail.com",
        subject: "Un nuevo usuario se a registrado",
        text: `se a registrado una persona con estos datos`
    }
    transporter.sendMail(email, (error, info)=>{
        if(error){
            res.status(500).send(error.message)
        }
        console.log('main info', info)
        
    })
    console.log(respuesta);
    res.json(respuesta)   
})

export {router as UserRouter}
