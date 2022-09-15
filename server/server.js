
import express from "express";
import {CarroArchivosRouter} from "./carritosArchivosRouter.js";
import {carritoMongoRouter} from "./carritosMongoRouter.js";
import {carritoFirebaseRouter} from "./carritosFirebaseRouter.js";

import {ProductosArchivosRouter} from './productosArchivosRouter.js'
import { ProductosMongoRouter } from "./productosMongoRouter.js";
import { ProductosFirebaseRouter } from "./productosFirebaseRouter.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(ProductosArchivosRouter)
app.use(CarroArchivosRouter)
app.use(ProductosMongoRouter)
app.use(ProductosMongoRouter)
app.use(carritoMongoRouter)
app.use(ProductosFirebaseRouter)
app.use(carritoFirebaseRouter)
app.all('*', async (req, res) => {
    res.send({
        mensaje: "pagina no encontrada"
    })
  });

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`escuchando el puerto ${PORT}`);
})
