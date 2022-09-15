import Contenedor from "../../contenedor/contenedorArchivo.js";
import fs from 'fs';

class productosDaoArchivos extends Contenedor {

    constructor (archivo) {
        super(archivo);
    }
   
    async save(obj){
        const productosJson = await this.readFile();
        const ids = productosJson.map(obj => obj.id);
        let id = Math.max(...ids) + 1 ;
        try {
            if(productosJson.length > 0) {
                await fs.promises.writeFile(this.archivo, JSON.stringify([{...obj, id}, ...productosJson], null, 2),'utf8')    
                return id;
            }else {
                await fs.promises.writeFile(this.archivo, JSON.stringify([{...obj, "id": 1}], null, 2) ,'utf8')   
                return 1;
            }
        } catch (error) {
            console.error('El archivo no se pudo grabar',error)
        }
        

    }
    async getById(id){
        console.log('data ID', id)
        const productosJson = await this.readFile();
        const productoId = productosJson.find(producto => producto.id === id);
        if(productoId) {
            console.log(productoId)
            return productoId;
        }else {
            console.warn("No hay producto con ese ID")
            return null;
        }
    }
    async getAll(){
        const productosJson = await this.readFile();
        if(productosJson !== []) {
            console.log(productosJson)
            return productosJson;
        }else {
            console.warn("No hay productos")
            return null;
        }
    }
    async updateById(id, obj) {
        const productosJson = await this.readFile();  
        productosJson[id] = obj;
        try{
            if (productosJson.length > 0) {
                await fs.promises.writeFile(this.archivo, JSON.stringify([...productosJson], null, 2), 'utf8')
                console.error("el update tiro", productosJson);  
                return id;
            }else {
                console.error("Fallo el update  ");            
            }
        }catch(error){
            console.error("Fallo el update ", error);            
        }
    }
    async deleteById(id){
        const productosJson = await this.readFile();
        const productoNuevo = productosJson.filter(producto => producto.id !== id);
        if(productoNuevo) {
            try {
                await fs.promises.writeFile(this.archivo, JSON.stringify([...productoNuevo], null, 2) ,'utf8')                 
                console.log(productoNuevo)
                return productoNuevo
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

export default productosDaoArchivos;
