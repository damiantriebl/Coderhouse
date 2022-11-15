import usuariosDaoMongo from "../persistencia/usuariosMongo.js";
import bcrypt from 'bcryptjs'
class userNormalizer {
  constructor() {}

  async guardarUsuario(obj) {
    if (
      obj.email &&
      obj.password &&
      obj.edad &&
      obj.direccion &&
      obj.telefono
    ) {
      const salt = await bcrypt.genSalt(10);
      obj.password = await bcrypt.hash(obj.password, salt);

      const usuario = {
        email: obj.email,
        password: obj.password,
        edad: obj.edad,
        direccion: obj.direccion,
        telefono: obj.telefono,
        nombre: obj.nombre,
        fechaAlta: Date.now(),
      };
      const salvado = await new usuariosDaoMongo().save(usuario)
      console.log("salvado", salvado);
      return {message: "se cargo correctamente", success: "err", data: salvado}

    }else{
        return {message: "no cumple con los requisitos", success: "err"}
    }
  }
  async cargarUsuario(obj) {
    if (
      obj.email &&
      obj.password  
    ) {
        const user =  await new usuariosDaoMongo().getByEmail(obj.email)
        console.log('email', obj.email, 'password', obj.password)
        console.log('password db', user)

        if(user?.password){
            let checkPass = await bcrypt.compare(obj.password, user.password);
            if(checkPass){
                return {message: "Se ingreso correctamente", success: true}
            }else{
                return {message: "el mail o la contraseña es incorrecta", success: false}
            }
        }else {
            console.log('le erraste feo')
            return {message: "no se encontro el mail", success: false}

        }
    }else{
        return {message: "no cumple con los requisitos", success: "err"}
    }
  }
}
export default userNormalizer;