import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";
import passportLocal from "passport-local";
import session from "express-session";
import User from "./persistencia/usuariosMongo.js";
import usuariosDaoMongo from "./persistencia/usuariosMongo.js";
import bcrypt from "bcryptjs";
import { UserRouter } from "./routes/User.Routes.js";
import { ProductosRouter } from "./routes/Productos.Routes.js";
import { CarritoRouter } from "./routes/Carro.Router.js";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const PRIVATE_KEY = "SECRETO";
const LocalStrategy = passportLocal.Strategy;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(UserRouter);
app.use(ProductosRouter);
app.use(CarritoRouter);
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const usuario = await new usuariosDaoMongo().getByEmail(email);
      if (usuario === "err") throw err;
      if (usuario) {
        bcrypt.compare(password, usuario.password, function (error, isMatch) {
          if (error) {
            return done(null, false);
          }
          return done(null, usuario);
        });
      } else {
        return done(null, false);
      }
      return false;
    }
  )
);

//TODO se usa para configuracion por debugger
// const url = process.env.MONGO_URI;
const url =
  "mongodb+srv://damian:05550Kayak@cluster1.mqi7dv8.mongodb.net/ecommerce";
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("mongodb conectado");
  }
);


//////////////////   passport serialize   ///////

passport.serializeUser((user, done) => {
  done(null, user.id)
})


passport.deserializeUser((id, done) => {
  let user = Users.find( user => user.id === id )
  done(null, user)
})


app.post("/api/login", passport.authenticate('local'), (req, res) => {
  const userSended = {
    id: req?.user._id,
    nombre: req?.user.nombre,
    avatar: req?.user.avatar,
    edad: req?.user.edad,
    direccion: req?.user.direccion,
    email: req?.user.email,
    isAdmin: req?.user.isAdmin

  }
  res.send({user: userSended })
});

const PORT = process.env.port || 4000;

app.listen(PORT, () => {
  console.log("Se esta escuchando", PORT);
});
