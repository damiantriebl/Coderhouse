import { connect } from "../config/mongoConfig.js";

class productosDaoMongo {
  constructor(db) {
    this.db = connect().productosModel;
  }
  async save(producto) {
    try {
      console.log('dtcon produ', producto)
      let productoObj = await this.db.create(producto);
      productoObj.save();
      return productoObj;
    } catch (error) {
      console.warm("hay un error ", error);
      return { error: error.message };
    }
  }
  async getById(id) {
    try {
      console.log('dtcon id', id)
      let getById = await this.db.findOne({id});
      return { success: true, data: getById };;
    } catch (error) {
      return { success: false, data: null , error: error.message };
    }
  }
 
  async getAll() {
    try {
      let getall = await this.db.find({});
      return { success: true, data: getall };;
    } catch (error) {
      return { success: false ,error: error.message };
    }
  }
  async getForType(tipo) {
    try {
      let getForType = await this.db.find({tipo});
      return { success: true, data: getForType };;
    } catch (error) {
      return { success: false ,error: error.message };
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
  async deleteById(id) {
    try {
      let deleteId = await this.db.deleteOne({ _id: id });
      return deleteId;
    } catch (error) {
      return { error: error.message };
    }
  }
}

export default productosDaoMongo;