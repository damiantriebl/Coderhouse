import express from 'express';
import Contenedor from './Contenedor.js';


const router = express.Router();
const productos = new Contenedor('./tp4/productos.json')

router.get('/editar/:id', async (req, res) => {
    const id = req.params.id;  

    const valoresAntiguos = await productos.getById(parseInt(id))    
    console.log('paso por aca con el id', id)
    if(valoresAntiguos){
        res.send(`
        <div style="display:flex; justify-content: center; flex-direction: column;">
                     <h1>Enviar producto</h1>
                     <div>
                        <form action="/api/productos/${id}" method="put">
                            <label>nombre: <input type="text" id="title" name="title" require value=${valoresAntiguos.title} /></label>
                            <label>precio: <input type="text" name="price" value=${valoresAntiguos.price}></label>
                            <input type="hidden" id="id" name="id" value="${id}" />
                            <input type="submit" value="Submit">
                            <input type="hidden" name="_METHOD" value="PUT"/>
                        </form>
                    </div>
        </div>`)
    }else {
        res.send('<div style="display:flex; justify-content: center; flex-direction: column;"><h1></h1>estas tratando de editar un objeto que no se le encuentra el id</h1></div>')
    }
    
   
  });

  export {router as editarRouter}