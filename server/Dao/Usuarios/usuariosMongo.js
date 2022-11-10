import {connect} from '../../config/configMongo'

class usuariosDaoMongo {

    constructor (db) {
        this.db = connect().usuarioModel;
    }
   
    async save(obj){
        try{
            if(obj.email && obj.password && obj.edad && obj.direccion && obj.telefono){
                let usuario =  await this.db.create({
                    email: obj.email,
                    password: obj.precio,
                    edad: obj.edad,
                    direccion: obj.direccion,
                    telefono: obj.telefono,

                });
                usuario.save();
                return usuario
            }else{
                return {error: "faltan algunos campos"}
            }
        }catch(error){
            console.warm('hay un error ', error)
            return {error: error.message}
        } 
    }
    async getById(id){
        try{
            let getById=  await this.db.find({id: _id})
            return getById; 
        }catch(error){
            return {error: error.message}
        }
    }
    async getAll(){
        try{
            let getall =  await this.db.find({})
            return getall; 
        }catch(error){
            return {error: error.message}
        }
    }
   /*  async updateById(id, obj) {
        try{
            if(obj.email && obj.password && obj.edad && obj.direccion && obj.telefono){
                let carritos =  await this.db.findOneAndUpdate(
                    {_id: id},
                    {
                    producto: obj.producto,
                    precio: obj.precio,
                    thumbnail: obj.thumbnail
                });
                carritos.save();
                return carritos
            }else{
                return {error: "no tiene elementos"}
            }
        }catch(error){
            console.warm('hay un error ', error)
            return {error: error.message}
        }
    } */
    async deleteById(id){
        try{
            let deleteId =  await this.db.deleteOne({ _id: id });
            return deleteId; 
        }catch(error){
            return {error: error.message}
        }
    }
}

export default usuariosDaoMongo;