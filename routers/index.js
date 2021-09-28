const { Router } = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');


const PetController = require('../controllers/pets');

const router = new Router();



router.get('/pets', AuthMiddleware.Auth, PetController.getAll);
// router.get('/pets', PetController.getAll);

router.post('/pets', PetController.store);

router.patch('/pets/:id', PetController.update);

router.delete('/pets/:id', PetController.delete);

module.exports = router;


