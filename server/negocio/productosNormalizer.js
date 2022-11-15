import productosDaoMongo from "../persistencia/productosMongo.js";

class productosNormalizer {
  constructor() {}
  async guardarProducto(obj) {
    if (
      obj.productos &&
      obj.precio &&
      obj.thumbnail
    ) {
      const producto = {
        productos: obj.productos,
        precio: obj.precio,
        thumbnail: obj.thumbnail,        
      };
      const productoGuardado = await new productosDaoMongo().save(producto)
      console.log("salvado", productoGuardado);
      return {message: "se cargo correctamente", success: "err", data: productoGuardado}

    }else{
        return {message: "no cumple con los requisitos", success: "err"}
    }
  }
  async cargarTodosLosProductos() {  
        const productos =  await new productosDaoMongo().getAll()
        console.log('productos!', productos)
        if(productos.data?.length > 0){
            return {message: "Productos encontrados", data: productos.data, success: true}      
        }else {
          return {message: "no se encontro productos", success: false}
        }   
  }
}
export default productosNormalizer;