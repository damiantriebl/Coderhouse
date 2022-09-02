const {optionsMariaDB} = require('./options/conexionMariaDB.js');
const knex = require('knex').knex(optionsMariaDB);


class DataCrud {    
    constructor(configKnex, tabla) {
        this.knex = configKnex
        this.tabla = tabla
    }
    async getLength() {
        let length = await db().from(this.tabla).select('*');
        return length
    }
    async save(obj) {
        try {
            let item = await knex.from(this.tabla).insert(obj)  
            console.log('el item es', item)
            return item
        } catch (error) {
            console.log(error);
        }
    }
    async getById(id) {
        try {
            let item = await knex.from(this.tabla).select('*').where({ id: id })
            return item[0]
        } catch (error) {
            console.log(error);
        }
    }
    async deleteByUserAndIdProducto(id, idUsuario){
        try {
            let item = await knex.from(this.tabla).select('*').where({ idUsuario }).where({id}).del()
            return item
        } catch (error) {
            console.log(error);
        }
    }
    async getByUserId(idUsuario) {
        try {
            let item = await knex.from(this.tabla).select('*').where({ idUsuario })
            return item[0]
        } catch (error) {
            console.log(error);
        }
    }
    async getAll() {                        
        try {
            console.log('el nombre de la tabla', this.tabla)
            let items = await knex.from(this.tabla).select('*')
            console.log('los productos son' , items)
            return items
        } catch (error) {
            console.log(error);
        }
    }


    async updateById(id, product) {
        try {
            return id  = await this.knex.from(this.tabla).where({id:id}).update({...product})
            return {id}
        } catch (error) {
            console.log(error);
        }
    }

    // deleteById(Number) : void

    async deleteById(id) {
        try {
            return id = await this.knex.from(this.tabla).where({ id: id }).del()
            return { id }
        } catch (error) {
            console.log(error);
        }
    }

    // deleteAll() : void

    async deleteAll() {
        await this.knex.from(this.tableName).del()
        return { message: 'Todos los items eliminados' }
    }
}
module.exports = DataCrud;