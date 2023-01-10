import {getcarroDao} from "../Dao/carroDao.js";
class carroNormalizer {
  constructor() {}
  async getAll(idUser) {
    const todoElCarro = await new getcarroDao().getAll(idUser);
    if(todoElCarro.success){
      return {
        message: "se obtubo el carro",
        success: true,
        data: todoElCarro.data,
      };
    }else {
      return {
        message: "algo fallo",
        success: false,
        error: todoElCarro.error,
      };
    }
  
  } 
  async guardarcarro(usuario, obj) {
    const carro = {
      idUser: usuario,
      idProducto: obj.idProducto,
      producto: obj.producto,
      precio: obj.precio,
      thumbnail: obj.thumbnail,
      fechaAlta: obj.timeStamp,
      cantidad: 1
    };
    console.log ('datos del carro', carro)
    const carroGuardado = await new getcarroDao().save(carro);
    return {
      message: "se cargo correctamente",
      success: true,
      data: carroGuardado,
    };
  }
  async deleteByUserAndObject(user, idObj) {
    console.log(user , idObj);    
    const carroGuardado = await new getcarroDao().deleteByUserAndObject(user, idObj);
    return {
      message: "se borro correctamente",
      success: true,
      data: carroGuardado,
    };
  }
  async cargarTodosLoscarros() {
    const carros = await new getcarroDao().getAll();
    console.log("carros!", carros);
    if (carros.data?.length > 0) {
      return {
        message: "carros encontrados",
        data: carros.data,
        success: true,
      };
    } else {
      return { message: "no se encontro carros", success: false };
    }
  }
}
export default carroNormalizer;
