import express  from "express";
import session from "express-session";
import redis from 'redis'
import connectRedis from "connect-redis";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const redisStore = connectRedis(session)

const redisClient = redis.createClient({
    host: 'redis-12757.c14.us-east-1-2.ec2.cloud.redislabs.com:12757',
    port: 12757
})
redisClient.on('error', function (err) {
    console.log('no se puede establecer conexion con redis. ' + err);
})
redisClient.on('connect', function (ok) {
    console.log('se conecto redis');
});
//Configuramos el middleware
app.use(session({
    store: new redisStore({ client: redisClient }),
    secret: 'lWsQsGAK4er3PPFSp5MZoSBS3V5tsSgG',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, 
        httpOnly: false, 
        maxAge: 10000 // session en milisegundos
    }
}))
app.get('/', (req, res) => {
    const sess = req.session;
    if(sess.usuario && sess.password){
            res.write(`<h1>Bievenido ${sess.username} </h1><br>`)
            res.end('<a href=' + '/logout' + '>Cerrar Sesion</a >')
        
    }else {
        var currentPath = process.cwd();

        res.sendFile( currentPath + "/login.html")
    }
})

app.post('/login', (req,res) => {
    const sess = req.session;
    const { username, password } = req.body;
    sess.username = username;
    sess.password = password
    res.redirect('/')
})
app.get('/logout', (req,res) =>{
    req.session.destroy(err => {
        if(err) {
            return console.log(err)
        }
        res.redirect('/')
    })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`escuchando el puerto ${PORT}`);
})