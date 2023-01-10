import { connect } from "../config/mongoConfig.js";

class OrdenDaoMongo {
  constructor(db) {
    this.db = connect().ordenesModel;
  }
  async save(orden) {
    try {
      let ordenObj = await this.db.create(orden);    
      ordenObj.save();
      return ordenObj;
    } catch (error) {
      console.warn("hay un error ", error);
      return { error: error.message };
    }
  }

  async getAll(idUser) {
    try {
      let getall = await this.db.find({idUser});
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
 
}

export default OrdenDaoMongo;
