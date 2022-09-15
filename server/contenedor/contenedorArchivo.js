import fs from 'fs';

class Contenedor {
    constructor (archivo) {
        this.archivo = archivo;
        console.log(archivo)
    }
    async readFile () {
        let productos = [];
        let productosJson;
        try {
            productos = await fs.promises.readFile(this.archivo, 'utf-8');
        } catch (error) {
            console.error('No se encontro el archivo')
        }
        if(productos === '') productos = '[]';
        productosJson = JSON.parse(productos);
        return productosJson;
    }
    async getLenght(){
        const productosJson = await this.readFile();
        return productosJson.length;
    } 
}

export default Contenedor;