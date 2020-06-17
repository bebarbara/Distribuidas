const express = require ('express');
const router = express.Router();



//obtengo el modelo que definimos y desde shop hago 
//consultas a la base de datos
const { getPreferGens,
        getPreferGensUser,
        createPreferGen,
        deletePreferGen,
        getOnePreferGen
        } = require('../controllers/preferGens.controller');

//router.route =http://localhost:4000/
router.route('/preferGen')
    .get(getPreferGens)
    .post(createPreferGen);

router.route('/preferGen/:id')
    .get(getOnePreferGen)
    .delete(deletePreferGen);
  
router.route('/preferGen-usuario')
    .get(getPreferGensUser);



module.exports = router;


