const express = require('express');
const HandlerDB = require("./containerDB.js")
const cors = require('cors')
const { optionsMariaDB } = require('./options/conexionMariaDB.js')
const { optionsSqlite3 } = require('./options/conexionSqlLite.js')

const knexMariaDB = require('knex')(optionsMariaDB)
const knexSqlite3 = require('knex')(optionsSqlite3)
const http = require('http');

const objProducto = new HandlerDB(knexMariaDB,'productos')
const objCarro = new HandlerDB(knexMariaDB,'carro')
const objComentarios = new HandlerDB(knexSqlite3,'messages')
const {router} = require('./productosRouter')
const {routerCarro} = require('./carroRouter')
const {Server: HttpServer} = require('http') 
const {Server: IOServer} = require('socket.io');

const app = express();
const PORT = process.env.PORT || 8080
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)
app.use(routerCarro)

const serverHttp =  http.createServer(app);
app.use(cors())

const io = new IOServer(serverHttp, {
    cors: {
        origin: "*",
        methods: ["GET", 'POST']
    }
})

io.on('connection', async (socket) =>{
    const listaComentarios = await objComentarios.getAll()
    const listaProductos = await objProducto.getAll()   

    socket.emit('comentarios', listaComentarios)
    socket.emit('productos', listaProductos )
    socket.on('producto', async (data) => {    
        await productos.save({producto: data.body.producto, precio: data.body.precio, thumbnail: data.body.thumbnail});
        const listaProductos = await comentarios.getAll() 
        io.sockets.emit('productos', listaProductos)
    })
    socket.on('message', async (data) => {    
        await comentarios.save({nombre: data.body.nombre, titulo: data.body.titulo, comentario: data.body.comentario, fecha: new Date().toLocaleDateString('es-ar', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    });
        const listaComentarios = await comentarios.getAll() 
        io.sockets.emit('comentarios', listaComentarios)
    })
  
})
serverHttp.listen(4000, () => {console.log('server is running on 4000')})