const express = require ('express');
const router = express.Router();


var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//obtengo el modelo que definimos y desde User hago 
//consultas a la base de datos
const { getUsers,createUser, deleteUser, getOneUser} = require('../controllers/users.controller');

//router.route =http://localhost:4000/
router.route('/User')
    .get(getUsers)
    .post(createUser);

router.route('/User/:id')
    .get(getOneUser)
    .delete(deleteUser);

module.exports = router;




