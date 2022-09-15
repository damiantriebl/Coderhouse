# Coderhouse
## Entrega 2

Este proyecto esta para pegarle unicamente con postman, 
esta construida bajo 3 paradigmas, por archivo, por mongo y por firebase, las cadenas de conexion van a mantenerse publicas por un periodo corto de tiempo por cuestiones de seguridad

## Para usar mongo como base de datos (en la nube)

```'/api/mongo/productos' -> get : puede listar todos los productos

'/api/mongo/productos/:id' -> get : obtener solo ese producto

'/api/mongo/productos' -> post : agregar un nuevo producto

'/api/mongo/productos/:id' -> put :  editar un producto

'/api/mongo/productos/:id' -> delete : eliminar un producto

### el carro tambien esta construido

'/api/mongo/carro' -> get : puede listar todos los productos en el carro

'/api/mongo/carro/:id' -> get : obtener solo ese producto del carro

'/api/mongo/carro' -> post : agregar un nuevo producto al carro

'/api/mongo/carro/:id' -> put :  editar un producto del carro 

'/api/mongo/carro/:id' -> delete : eliminar un producto del carro


## Para usar Firebase como base de datos 

'/api/firebase/productos' -> get : puede listar todos los productos
s/:id' -> get : obtener solo ese producto

'/api/firebase/productos' -> post : agregar un nuevo producto

'/api/firebase/productos/:id' -> put :  editar un producto

'/api/firebase/productos/:id' -> delete : eliminar un producto

### el carro tambien esta construido

'/api/firebase/carro' -> get : puede listar todos los productos en el carro

'/api/firebase/carro/:id' -> get : obtener solo ese producto del carro

'/api/firebase/carro' -> post : agregar un nuevo producto al carro

'/api/firebase/carro/:id' -> put :  editar un producto del carro 

'/api/firebase/carro/:id' -> delete : eliminar un producto del carro


## Para usar Archivos como base de datos 

'/api/archivo/productos' -> get : puede listar todos los productos
s/:id' -> get : obtener solo ese producto

'/api/archivo/productos' -> post : agregar un nuevo producto

'/api/archivo/productos/:id' -> put :  editar un producto

'/api/archivo/productos/:id' -> delete : eliminar un producto

### el carro tambien esta construido

'/api/archivo/carro' -> get : puede listar todos los productos en el carro

'/api/archivo/carro/:id' -> get : obtener solo ese producto del carro

'/api/archivo/carro' -> post : agregar un nuevo producto al carro

'/api/archivo/carro/:id' -> put :  editar un producto del carro 

'/api/archivo/carro/:id' -> delete : eliminar un producto del carro
