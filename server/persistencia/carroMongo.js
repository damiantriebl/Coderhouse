import { connect } from "../config/mongoConfig.js";

class CarroDaoMongo {
  constructor(db) {
    this.db = connect().CarroModel;
  }
  async save(carro) {
    try {
      let carroObj = await this.db.create(carro);
    
      carroObj.save();
      return carroObj;
    } catch (error) {
      console.warn("hay un error ", error);
      return { error: error.message };
    }
  }
  async getById(id) {
    try {
      let getById = await this.db.find({ id: _id });
      return { success: true, data: getById, error: error.message };
    } catch (error) {
      return { error: error.message };
    }
  }

  async getAll() {
    try {
      let getall = await this.db.find({});
      return { success: true, data: getall };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  async deleteById(id) {
    try {
      let deleteId = await this.db.deleteOne({ _id: id });
      return deleteId;
    } catch (error) {
      return { error: error.message };
    }
  }
  async deleteByUserAndObject(id, objId) {
    try {
      let deleteId = await this.db.deleteOne({  usuario: id, idProducto: objId, });
      return deleteId;
    } catch (error) {
      return { error: error.message };
    }
  }
}

export default CarroDaoMongo;
