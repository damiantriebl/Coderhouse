import { connect } from "../config/mongoConfig.js";

class comentarioDaoMongo {
  constructor(db) {
    this.db = connect().comentariosModel;
  }
  async save(comentario) {
    try {
      let comentarioObj = await this.db.create(comentario);
      comentarioObj.save();
      return comentarioObj;
    } catch (error) {
      return { error: error.message };
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
  
 
}

export default comentarioDaoMongo;