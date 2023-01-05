import {getOrdenDao} from "../Dao/ordenDao.js";

class OrdenesNormalizer {
  constructor() {}
  async getAll(idUser) {
    const Ordenes = await new getOrdenDao().getAll(idUser);
    if(Ordenes.success){
      return {
        message: "se obtubieron las ordenes",
        success: true,
        data: Ordenes.data,
      };
    }else {
      return {
        message: "algo fallo",
        success: false,
        error: Ordenes.error,
      };
    }
   
  }
  async guardarOrden(orden) {
    const ordenNormalizado = {
      usuarioId: orden.usuario.id,
      usuario: orden.usuario,
      orden: orden.orden  
    };
    console.log ('datos del orden', ordenNormalizado)
    const carroGuardado = await new getOrdenDao().save(ordenNormalizado);
    return {
      message: "se cargo correctamente",
      success: true,
      data: carroGuardado,
    };
  }

  async cargarTodasLosOrde() {
    const ordenes = await new getOrdenDao().getAll();
    console.log("ordenes!", ordenes);
    if (ordenes.data?.length > 0) {
      return {
        message: "ordenes encontrados",
        data: ordenes.data,
        success: true,
      };
    } else {
      return { message: "no se encontro ordenes", success: false };
    }
  }
}
export default OrdenesNormalizer;
