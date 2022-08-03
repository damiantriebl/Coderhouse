# Coderhouse
## TP4

Se uso la clase Anterior para la creacion de un servidor Express.


* / -> GET -> Con este endpoint puede crear un nuevo elemento
* /editar/:id -> GET -> Con este endpoint editar un elemento (si se hace de esta manera solo va por POST, y no por PUT ya que los formularios estandar no soportar PUT)

endpoint  API

* /api/productos -> GET -> Con este endpoint puede listar elementoS
* /api/productos/:id -> GET -> Con este endpoint puede ver un producto especifico
* '/api/productos' -> POST -> Con este endpoint puede crear un nuevo producto, con un body con producto, thumbnail y precio (este puede ser integer o string, ya que se convierte para no tener falla)
* '/api/productos/:id' -> PUT -> Con este endpoint puede editar un producto, con un body con producto, thumbnail y precio (este puede ser integer o string, ya que se convierte para no tener falla)
* '/api/productos/:id' -> DELETE -> Con este endpoint puede eliminar un producto.