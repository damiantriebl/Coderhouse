import { connect } from "../config/configMongo.js";

class productosDaoMongo {
  constructor(db) {
    this.db = connect().productosModel;
  }
  async save(producto) {
    try {
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
      let getById = await this.db.find({ id: _id });
      return { success: true, data: getById,  error: error.message };;
    } catch (error) {
      return { error: error.message };
    }
  }
 
  async getAll() {
    try {
      let getall = await this.db.find({});
      console.log('getall es', getall)
      return { success: true, data: getall };;
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