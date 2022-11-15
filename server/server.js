import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";
import passportLocal from "passport-local";
import * as dotenv from "dotenv";
import session from "express-session";
import User from "./persistencia/usuariosMongo.js";
import { UserRouter } from "./routes/User.Routes.js";
import { ProductosRouter } from "./routes/Productos.Routes.js";

dotenv.config();
const LocalStrategy = passportLocal.Strategy;

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserRouter);
app.use(ProductosRouter)
//const url = process.env.MONGO_URI;
const url = "mongodb+srv://damian:05550Kayak@cluster1.mqi7dv8.mongodb.net/ecommerce"
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
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      const usuario = new userNormalizer().cargarUsuario(email, password);
      if (usuario.success === "err") throw err;
      if (usuario.success) {
        return done(null, usuario);
      } else {
        return done(null, false);
      }
    }
  )
);
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
  User.findOne({ _id: id }, (err, usr) => {
    const userInformation = {
      email: usr.email,
      isAdmin: usr.isAdmin,
    };
    cb(null, userInformation);
  });
});
const PORT = process.env.port || 4000;

app.listen(PORT, () => {
  console.log("Se esta escuchando", PORT);
});
