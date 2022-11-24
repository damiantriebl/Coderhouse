import {getcarroDao} from "../Dao/carroDao.js";
class carroNormalizer {
  constructor() {}
  async guardarcarro(id, obj) {

    const carro = {
      usuario: id,
      idProducto: obj.idProducto,
      producto: obj.producto,
      precio: obj.precio,
      thumbnail: obj.thumbnail,
      fechaAlta: obj.timeStamp,
      cantidad: 1
    };
    const carroGuardado = await new getcarroDao().save(carro);
    console.log("salvado", carroGuardado);
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
