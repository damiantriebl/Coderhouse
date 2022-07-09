class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascotas(mascota) {
        this.mascotas.push(mascota);
    }
    countMasctotas() {
        return this.mascotas.length;
    }
    addBook(nombre, autor) {
        this.libros.push({
            nombre,
            autor
        });
    }
    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }
}
const usuario = new Usuario('damian', 'triebl',
                             [
                              {nombre:'game of thrones',autor:'JRR Martin'},                            
                            ],
                             ['pepito el conejo', 'cachita la perra']);

console.log('DTCON: listar nombres de libros previo',usuario.getBookNames())
usuario.addBook(  'harry potter','jk rowling');
usuario.addBook('el señor de los anillos','tolkien');
console.log('DTCON: listar nombres de libros posterior',usuario.getBookNames())
console.log('DTCON: contar de mascotas previo', usuario.countMasctotas());
usuario.addMascotas('renato el gato')
console.log('DTCON: contar de mascotas finales', usuario.countMasctotas());
console.log('DTCON: nombre completo', usuario.getFullName());
