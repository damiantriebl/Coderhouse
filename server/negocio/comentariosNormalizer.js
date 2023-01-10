import comentarioDaoMongo from "../persistencia/comentarioMongo.js";

class comentariosNormalizer {
  constructor() {}
  async guardarComentario(obj) {
    if (
      obj.nombre &&
      obj.titulo &&
      obj.comentario &&
      obj.tipo
    ) {
      const comentario = {
        nombre: obj.nombre,
        titulo: obj.titulo,
        comentario: obj.comentario,
        tipo: obj.tipo
      };
      const comentarioGuardado = await new comentarioDaoMongo().save(comentario)
      return {message: "se cargo correctamente", success: "err", data: comentarioGuardado}

    }else{
        return {message: "no se puede cargar el comentario", success: "err"}
    }
  }
  async cargarTodosLosComentarios() {  
        const comentarios =  await new comentarioDaoMongo().getAll()
        if(comentarios.data?.length > 0){
            return {message: "Comentarios no encontrados encontrados", data: comentarios.data, success: true}      
        }else {
          return {message: "no hay comentarios", success: false}
        }   
  }
}
export default comentariosNormalizer;