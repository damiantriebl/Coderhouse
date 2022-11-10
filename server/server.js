import express from 'express';
import cors from "cors";
import { UserRouter } from './User.js';
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(cors({origin:"http://localhost:5173", credentials:true}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(UserRouter);
const url = process.env.MONGO_URI;
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) throw err;
    console.log('mongodb conectado')
})

const PORT = process.env.port || 4000;

app.listen(PORT, () => {
    console.log('Se esta escuchando', PORT)
})