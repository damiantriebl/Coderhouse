import CarroDaoMongo from "../persistencia/carroMongo.js";
class carroNormalizer {
  constructor() {}
  async getAll(idUser) {
    const todoElCarro = await new CarroDaoMongo()?.getAll(idUser);
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
    const carroGuardado = await new CarroDaoMongo().save(carro);
    return {
      message: "se cargo correctamente",
      success: true,
      data: carroGuardado,
    };
  }
  async deleteByUserAndObject(user, idObj) {
    const carroGuardado = await new CarroDaoMongo().deleteByUserAndObject(user, idObj);
    return {
      message: "se borro correctamente",
      success: true,
      data: carroGuardado,
    };
  }
  async cargarTodosLoscarros() {
    const carros = await new CarroDaoMongo().getAll();
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
