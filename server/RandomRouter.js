import express from 'express';
import compression from 'compression'
const router = express.Router();
import {fork} from 'child_process';


router.get("/test/random/:cant", compression(), (req, res) => {
  
  const cantidad = parseInt(req.params.cant) || 1e6;
  const forkeado = fork("./configuracion/forkeado.js");
  forkeado.send(cantidad);
  forkeado.on("message", (msg) => {
   res.send(msg) 
  })
});

export { router as RandomRouter };