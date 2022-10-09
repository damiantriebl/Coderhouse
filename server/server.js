const express = require('express');
const cors = require('cors')
const http = require('http');
const passport = require('passport')
const mongoose = require('mongoose')
const passportLocal = require('passport-local').Strategy;
const coockieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const httpServer = require("http").createServer();
const session = require('express-session')
const Contenedor = require('./Contenedor.js');
const produtosRouter = require('./productosRouter.js');
const carroRouter = require("./carroRouter.js");
const User = require('./User')
const productos = new Contenedor('./productos.json')
const comentarios = new Contenedor('./comentarios.json')
const morgan = require('morgan');
const { application } = require('express');

const app = express()   

mongoose.connect('mongodb+srv://damian:05550Kayak@cluster0.gr8hdky.mongodb.net/ecommerce?retryWrites=true&w=majority',   
(obj) => console.log('Mongose esta conectado')
)
/* const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", 'POST'],
        Credential: true
    }
}) */
app.use(
    cors({
      origin: "http://localhost:5173", // <-- location of the react app were connecting to
      credentials: true,
    })
  );
app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
 app.use(session({
     secret: 'secret',
     cookie: {
         httpOnly: true,
         secure: false,
         maxAge: 1000 * 60 * 60 * 24 * 7
 
     },
     rolling: true,
     resave: true,
     saveUninitialized: true,
 }))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(produtosRouter)
app.use(carroRouter)
app.use(morgan('dev'))
app.use(passport.initialize())
app.use(passport.session())
require('./passportConfig')(passport)
const server = http.createServer(app);
/* 
io.on('connection', async (socket) =>{
    const listaComentarios = await comentarios.getAll()
    const listaProductos = await productos.getAll()   

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
  
}) */

app.use(coockieParser('secret'))




/////////// utils /////////

const isValidePassword = (user, password) => {
    return bcrypt.compareSync(password, user.password)
}


const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

const checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    }else{
        res.redirect('/login')
    }
    

}
////////// PASSPORT  midelware //////////

//////////////////   passport serialize   ///////

passport.serializeUser((user, done) => {
    done(null, user.id)
})


passport.deserializeUser((id, done) => {
    let user = Users.find( user => user.id === id )

    done(null, user)
})


app.post("/api/login", 
    (req, res, next) => {
        passport.authenticate("local", (err, user, info) => {
            if (err) throw err
            if (!user) res.send(`no existe el usuario ${info.message}`)
            else {
                req.logIn(usr,err => {
                    if(err) throw err
                    res.send('autenticado con exito')
                    console.log(req.user)
                })
            }
        })(req,res, next)  
    }     
  );

// signup

app.post('/api/signup', (req, res) => {
    User.findOne({userId: req.body.userId}, async (err, doc)=>{
        if (err) throw err
        if (doc) res.send("el usuario existe")
        if (!doc) {
            const hashPass =  await bcrypt.hash(req.body.pass, 10)
            const newUser =  new User({
                userId: req.body.userId,
                pass: hashPass
            })
            await newUser.save();
            res.send('usuario creado')
        } 
    })
})
app.get('/api/user', (req, res) => {
    console.log(req.user)
    res.send(req.user)
})
// logout
app.get('/api/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err) }
        res.redirect('/login')
    })
})
server.listen(4000, () => {console.log('server is running on 4000')})