// const knex = require('../infraestrutura/conexao');
const validator = require('validator');


const Pet = require('../models/pet');


class PetController {

    /**
     * @method getAll
     * @description pegar um ou todos os pets
     * @param {*} req 
     * @param {*} res 
     */

    static async getAll(req, res){
        try {
            const pets = await Pet.getAll( req.query );
            res.status(200).json({ user: req.body.user, data: pets }).end();          
        } catch (error) {
            console.log('ERROR:', error);  
            res.status(500).json({error});                      
        }
    };

    static async store(req, res){
        try {

            // validation
            // if (!validator.isEmpty(req.body.name)) throw "Nome não informado.";
            
            if (!req.body.name) throw "Nome não informado.";
            if (!req.body.raca) throw "Raça não informada.";
            if (!req.body.idade) throw "Idade não informada.";

            const pet = await Pet.create(req.body);
            res.status(200).json(pet).end();            
        } catch (error) {
            console.log('ERROR:', error);  
            res.status(500).json({error});                      
        }
    };

    static async update(req, res){
        try {
            const pet = await Pet.update(req.params.id, req.body);
            res.status(200).json(pet).end();            
        } catch (error) {
            console.log('ERROR:', error);  
            res.status(500).json({error});                      
        }
    };


    static async delete(req, res) {
        try {
            const pet = await Pet.delete(req.params.id);
            res.status(200).json({id: req.params.id});            
        } catch (error) {
            console.log('ERROR:', error);  
            res.status(500).json({error});
            
        }
    }

}




// module.exports = app => {
//     app.get('/pets', (req, res) => {
//         try {
//             knex('pet').then(response => {
//                 res.status(200).json(response).end();
//             });

            
//         } catch (error) {
//             console.log('ERROR:', error);
//         }
//     });



//     app.post('/pets', async (req, res) => {
//         const pet = await Pet.create(req.body);
//             res.status(200).json(pet).end();  
//     });




//     app.patch('/pets/:id', async (req, res) => {

//         const {name} = req.body;

//         try {
//             // await knex('pet')
//             // .where({ id: req.params.id })
//             // .update({ name: name })

//             // const pet = await knex('pet')
//             //     .where({ id: req.params.id })
//             //     .first();

//             const pet = await Pet.update(req.params.id, req.body);
//             res.status(200).json(pet).end(); 
            
//         } catch (error) {
//             console.log('ERROR:', error);
//             res.status(500).json({error});            
//         }

        
//     });


// }


module.exports = PetController;