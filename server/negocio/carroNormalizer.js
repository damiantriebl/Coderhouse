import carroDaoMongo from "../persistencia/carroMongo.js";

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
    const carroGuardado = await new carroDaoMongo().save(carro);
    console.log("salvado", carroGuardado);
    return {
      message: "se cargo correctamente",
      success: "err",
      data: carroGuardado,
    };
  }

  async cargarTodosLoscarros() {
    const carros = await new carroDaoMongo().getAll();
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
