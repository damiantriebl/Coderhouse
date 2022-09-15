import { dbFirebase } from "../../contenedor/contenedorFirebase.js";

class carritoDaoFirebase  extends dbFirebase{

    constructor () {  
        super('carro')      
    }
   
    async save(obj){
        try{
            if(obj.producto && obj.precio && obj.thumbnail){
                let carritos =  await this.db.add(obj);
                return carritos
            }else{
                return {error: "no tiene elementos"}
            }
        }catch(error){
            console.warm('hay un error ', error)
            return {error: error.message}
        }
    }
    async getById(id){
        try{
            const getall = this.db.doc(id);
            const doc = await getall.get();
            if (!doc.exists) {
                console.log('No such document!');
            } else {
                return doc.data(); 
            }
        }catch(error){
            return {error: error.message}
        }
    }
    async getAll(){
        try{
            let querySnapshot =  await this.db.get()
            let data = querySnapshot.docs.map(obj=>obj.data())
            return data; 
        }catch(error){
            return {error: error.message}
        }
    }
    async updateById(id, obj) {
        try{
            if(obj.producto && obj.precio && obj.thumbnail){
                let carritos =  await this.db.doc(id).set(obj);
                return carritos
            }else{
                return {error: "no tiene elementos"}
            }
        }catch(error){
            console.warm('hay un error ', error)
            return {error: error.message}
        }
    }
    async deleteById(id){
        try{
            let carritos =  await this.db.doc(id).delete();
            return carritos
        }catch(error){
            return {error: error.message}
        }
    }   
}

export default carritoDaoFirebase;