import userNormalizer from '../../negocio/userNormalizer.js';


it('cuando se hace un singUp, tiene que quedar en la base de datos guardada',async () => {
    const usuarioMock = {
        email: "damian@gmail.com",
        password: "12345678",
        edad: 23,
        direccion: "61 66 6663",
        telefono: "454 454 54545 ",
        nombre: "damian triebl",
        avatar: "avatar.jpg",
        isAdmin: true,
        fechaAlta: Date.now(),
    }
       const respuesta = await new userNormalizer().guardarUsuario(usuarioMock);
        console.log('respuesta')
    }
)