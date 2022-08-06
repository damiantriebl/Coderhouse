import express from "express";
import path from 'path';
import { produtosRouter } from "./productos.js";
import Handlebars from 'express-handlebars'
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import Contenedor from './Contenedor.js';
const productos = new Contenedor('./productos.json')

const app = express()
const port = 4000 || process.env.PORT
// ruta: /helpers/js/test.js
console.log(path.join(__dirname, 'views'))
app.engine(
    'hbs', 
    Handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',      
        layoutsDir: path.join(__dirname, 'views'),
        partialsDir: path.join( __dirname, 'views', 'partials')
    })
)

app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.static('public'))


app.get('/crear', async (req, res) => {
  res.render('creador.hbs')
})

app.get('/', async (req, res) => {
    const producto = await productos.getAll();
    console.log(producto);
    res.render('index', {listExist: true, list: producto })
})
 
 




app.listen(4000, err => {
    if(err) throw new Error(`Erron on server: ${err}`)
    console.log(`Server is running on port ${port}`)
})




