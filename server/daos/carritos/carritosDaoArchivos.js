import Contenedor from "../../contenedor/contenedorArchivo.js";
import fs from 'fs';

class carroDaoArchivos extends Contenedor {

    constructor (archivo) {
        super(archivo);
    }
   
    async save(obj){
        const carritoJson = await this.readFile();
        const ids = carritoJson.map(obj => obj.id);
        let id = Math.max(...ids) + 1 ;
        try {
            if(carritoJson.length > 0) {
                await fs.promises.writeFile(this.archivo, JSON.stringify([{...obj, id}, ...carritoJson], null, 2),'utf8')    
                return id;
            }else {
                await fs.promises.writeFile(this.archivo, JSON.stringify([{...obj, "id": 1}], null, 2) ,'utf8')   
                return 1;
            }
        } catch (error) {
            console.error('El archivo no se pudo grabar',error)
        }       
    }
    async updateById(id, obj) {
        const carritoJson = await this.readFile();  
        carritoJson[id] = obj;
        try{
            if (carritoJson.length > 0) {
                await fs.promises.writeFile(this.archivo, JSON.stringify([...carritoJson], null, 2), 'utf8')
                return id;
            }else {
                return id;
            }
        }catch(error){
            console.error("Fallo el update ", error);            
        }
    }
    async getById(id){
        const carritoJson = await this.readFile();
        const productoId = carritoJson.find(carrito => carrito.id === id);
        if(productoId) {
            console.log(productoId)
            return productoId;
        }else {
            console.warn("No hay carro con ese ID")
            return null;
        }
    }
    async getAll(){
        const carritoJson = await this.readFile();
        if(carritoJson !== []) {
            console.log(carritoJson)
            return carritoJson;
        }else {
            console.warn("No hay carro")
            return null;
        }
    }
    async deleteById(id){
        const carritoJson = await this.readFile();
        const carritoNuevo = carritoJson.filter(carrito => carrito.id !== id);
        if(carritoNuevo.length !== carritoJson.length) {
            try {
                await fs.promises.writeFile(this.archivo, JSON.stringify([...carritoNuevo], null, 2) ,'utf8')                 
                console.log(carritoNuevo)
            } catch (error) {
                console.error("Fallo al grabar ", error)                
            }
        }else {
            console.warn("No existe ese Id para borrar")
        }
    }
    async deleteAll(){
        try {
            await fs.promises.writeFile(this.archivo, '[]' ,'utf8')   
        } catch (error) {
            console.error('El archivo no se pudo grabar ', error)
        }
    }
}

export default carroDaoArchivos;
