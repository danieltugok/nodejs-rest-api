const knex = require('../infraestrutura/conexao');


class Pet {

    async getAll( data ){
        try { 
            return await knex('pet').where(data);                       
        } catch (error) {
            console.log('ERROR:', error);            
        }         
    }

    async create( data ){
        try {
            const pet_id = await knex('pet').insert(data);
            return await knex('pet').where({ id: pet_id[0] }).first(); 
                       
        } catch (error) {
            console.log('ERROR:', error);            
        }         
    }

    async update( id, data ){
        try {
            await knex('pet')
            .where({ id })
            .update( data )

            const pet = await knex('pet')
                .where({ id })
                .first();
            
            return pet;            
        } catch (error) {
            console.log('ERROR:', error);            
        }         
    }
 

    async delete(id) {
        try {
            await knex('pet')
              .where({ id })
              .del();
            
        } catch (error) {
            console.log('ERROR:', error); 
        }

    }

}

module.exports = new Pet();
