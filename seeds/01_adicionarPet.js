
exports.seed = async knex => {

  try {

    await knex.transaction( async trx => {
      // Deletes ALL existing entries
      await trx('pet').del();
      
      // Inserts seed entries
      await trx('pet').insert([
        {id: 1, name: 'Toff', raca: 'pastor alemao', idade: 2},
        {id: 2, name: 'Rufus', raca: 'labrador', idade: 5},
        {id: 3, name: 'Rex', raca: 'pitbull', idade: 12}
      ]);

      // const pet = await trx('pet').where({ name: 'Toff'});
      const pet = await trx('pet');
      console.table(pet);

    })  

  } catch (error) {
    console.log('ERROR:', error);
    
  }
  

};
