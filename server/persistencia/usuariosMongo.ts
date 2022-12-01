import { connect } from "../config/mongoConfig.js";

class usuariosDaoMongo {
  constructor(db) {
    this.db = connect().usuarioModel;
  }
  async save(user) {
    try {
      let usuario = await this.db.create(user);
      usuario.save();
      return usuario;
    } catch (error) {
      console.warn("hay un error ", error);
      return { error: error.message };
    }
  }
  async getById(id) {
    try {
      let getById = await this.db.find({ id: _id });
      return getById;
    } catch (error) {
      return { error: error.message };
    }
  }
  async getByEmail(email) {
    try {
      let getByEmail = await this.db.findOne({ email });
      return getByEmail;
    } catch (error) {
      return { message: 'no se encontro el registro', success: false, error: error.message };
    }
  }
  async getAll() {
    try {
      let getall = await this.db.find({});
      return getall;
    } catch (error) {
      return { error: error.message };
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

export default usuariosDaoMongo;
