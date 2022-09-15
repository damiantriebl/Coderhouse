# Coderhouse
## TP7

Este proyecto esta para pegarle unicamente con postman, se crea una base de datos con 

``` npm run createTables ```

y depuses se crea la base de datos en sqlLite y 2 tablas en sql MariaDb, para acceder a las bases de datos de maria dB existen los siguientes endpoints

'/api/productos' -> get : puede listar todos los productos
'/api/productos/:id' -> get : obtener solo ese producto
'/api/productos' -> post : agregar un nuevo producto
'/api/productos/:id' -> put :  editar un producto
'/api/productos/:id' -> delete : eliminar un producto

'/api/carro/:idUsuario' -> get : lista los productos dentro del carro por ese id de usuario
'/api/carro/:id/:idUsuario' -> delete : borra un producto dentro del carro
'/api/carro' -> post : agrega un producto al carro

lamentablemente no pude avanzar para que se vea el front con el sistema por un problema de cors, si saben como solucionar este problema envienme un mensaje. 