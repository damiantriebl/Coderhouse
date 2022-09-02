const { optionsMariaDB } = require('./options/conexionMariaDB.js')
const { optionsSqlite3 } = require('./options/conexionSqlLite.js')

const knexMariaDB = require('knex')(optionsMariaDB)
const knexSqlite3 = require('knex')(optionsSqlite3)

const productos = [
    {
      "producto": "Adidas Ultraboos 22",
      "precio": "44400",
      "thumbnail": "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bb6def9ffbb4748b2a1adf900a21bb5_9366/zapatillas-ultraboost-22.jpg",
      "id": 22
    },
    {
      "id": 21,
      "producto": "Adidas Ozweego",
      "precio": "2",
      "thumbnail": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/aea597b2faac4d8a95a1ad4f00ab0695_9366/ozweego-pure.jpg"
    },
    {
      "producto": "Adidas Predator",
      "precio": "10000",
      "thumbnail": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a1405e4c7764cc8a9e2ab4900aa2e8d_9366/botines-de-futbol-predator-20.4-versatil.jpg",
      "id": 20
    },
    {
      "producto": "Adidas Copa Sense",
      "precio": "18000",
      "thumbnail": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/d2219197ed56442281b6acb700930fde_9366/botines-copa-sense.1-terreno-firme.jpg",
      "id": 19
    },
    {
      "producto": "Adidas Ultraboos 22",
      "precio": "44400",
      "thumbnail": "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/ca974051c1e8422a9cbdae2a00fd601f_9366/zapatillas-adizero-adios-pro-3.jpg",
      "id": 18
    },
    {
      "producto": "Adidas Solar Glide",
      "precio": "56000",
      "thumbnail": "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bb6def9ffbb4748b2a1adf900a21bb5_9366/zapatillas-ultraboost-22.jpg",
      "id": 17
    },
    {
      "producto": "Adidas Solar Glide",
      "precio": "44400",
      "thumbnail": "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/5fb64c3c22c74b49a681adfa002e5747_9366/zapatillas-para-correr-solarglide-5.jpg",
      "id": 12
    },
    {
      "producto": "Adidas Nemezis Firme",
      "precio": 42222,
      "thumbnail": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4bfda350332a40a99773ab60009bb7d1_9366/botines-nemeziz-terreno-firme.jpg",
      "id": 7
    },
    {
      "producto": "Adidas ZX",
      "precio": 18000,
      "thumbnail": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbd8c79319e34546a8a7ad0a0080d6c7_9366/zapatillas-zx-2k-boost-2.0.jpg",
      "id": 6
    },
    {
      "producto": "Adidas Forum low",
      "precio": 37000,
      "thumbnail": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d021ba5119d43f0ac65ad4e00bc3a09_9366/zapatillas-forum-low.jpg",
      "id": 5
    },
    {
      "producto": "Adidas Nemezis",
      "precio": 89000,
      "thumbnail": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/909cccd4b5e44eac9662ae2e0159d232_9366/nemeziz-19-sg.jpg",
      "id": 4
    },
    {
      "producto": "Adidas RetroPy p9",
      "precio": 48000,
      "thumbnail": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/10ce6cc56d0e48778136ad9400e63c46_9366/zapatillas-retropy-p9.jpg",
      "id": 3
    },
    {
      "producto": "Adidas Choigo",
      "precio": 36000,
      "thumbnail": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/188c76b6cc7749218aeead1f01675623_9366/zapatillas-choigo.jpg",
      "id": 2
    },
    {
      "producto": "Adidas Stan Sminth",
      "precio": 20000,
      "thumbnail": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/da53093b5d384f8ea2fbac7201261755_9366/zapatillas-stan-smith.jpg",
      "id": 1
    }
  ]

const nameTableMariaDB = 'productos'

const carro =[
    {
      "idProducto": 20,
      "producto": "Adidas Predator",
      "precio": "10000",
      "thumbnail": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a1405e4c7764cc8a9e2ab4900aa2e8d_9366/botines-de-futbol-predator-20.4-versatil.jpg",
      "idUsuario": 1,
      "timeStamp": 1661711445038,
      "id": 3
    },
    {
      "idProducto": 21,
      "producto": "Adidas Ozweego",
      "precio": "2",
      "thumbnail": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/aea597b2faac4d8a95a1ad4f00ab0695_9366/ozweego-pure.jpg",
      "idUsuario": 1,
      "timeStamp": 1661711443848,
      "id": 2
    },
    {
      "idProducto": 22,
      "producto": "Adidas Ultraboos 22",
      "precio": "44400",
      "thumbnail": "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bb6def9ffbb4748b2a1adf900a21bb5_9366/zapatillas-ultraboost-22.jpg",
      "idUsuario": 1,
      "timeStamp": 1661711442817,
      "id": 1
    }
  ]

  const carroNombre = 'carro'

const batchMariaDB = async () => {
    try {
        console.log('Creando tabla productos...');
        await knexMariaDB.schema.createTable(nameTableMariaDB, table =>{
            table.increments('id')
            table.string('producto')
            table.float('precio')
            table.string('thumbnail')
        })
        
        console.log('Insertando productos...');
        await knexMariaDB(nameTableMariaDB).insert(productos)  // Le podemos pasar un obj o un array
        console.log('Creando tabla carro...');
        await knexMariaDB.schema.createTable(carroNombre, table =>{
            table.increments('id')
            table.float('idProducto')
            table.float('idUsuario')
            table.string('producto')
            table.float('precio')
            table.string('thumbnail')
            table.float('timeStamp')

        })
        
        console.log('Insertando productos...');
        await knexMariaDB(carroNombre).insert(carro)  // Le podemos pasar un obj o un array

    } catch (error) {
        console.log(error);
    } finally{
        knexMariaDB.destroy()
    }

}


// ----------------------------------------------------------------------

const mensajes = [

    {
      "nombre": "Damian",
      "titulo": "es el masa",
      "comentario": "el mas pesado",
      "fecha": "lunes, 15 de ago de 2022",
      "id": 6
    },
    {
      "nombre": "produce",
      "titulo": "asas",
      "comentario": "asasasa",
      "fecha": "lunes, 15 de ago de 2022",
  
      "id": 5
    },
    {
      "nombre": "Damian",
      "titulo": "as",
      "comentario": "asasasa",
      "fecha": "lunes, 15 de ago de 2022",
  
      "id": 4
    },
    {
      "nombre": "Damian triebl",
      "titulo": "es el mas",
      "comentario": "adas",
      "fecha": "lunes, 15 de ago de 2022",
  
      "id": 3
    },
    {
      "id": 1,
      "titulo": "Cadastro de usuário",
      "nombre": "Cadastro de usuário",
      "comentario": "es el comentario",
      "fecha": "2020-01-01"
    },
    {
      "id": 2,
      "titulo": "Cadastro ",
      "nombre": "el nombre",
      "comentario": "es el comentario q te va",
      "fecha": "2020-01-01"
    }
  ]

const nameTableSqlite3 = "messages" 

const batchSqlite3 = async () =>{
    try {
        console.log('Creando tabla Mensajes...');
        await knexSqlite3.schema.createTable(nameTableSqlite3, table =>{
            table.increments('id')
            table.string('titulo')
            table.string('nombre')
            table.string('comentario')
            table.float('dateMessage')
        })

        console.log('Insertando mensajes...');
        await knexSqlite3(nameTableSqlite3).insert(mensajes)  // Le podemos pasar un obj o un array

    } catch (error) {
        console.log(error)
    } finally {
        knexSqlite3.destroy()
    }
}

batchMariaDB()
batchSqlite3()