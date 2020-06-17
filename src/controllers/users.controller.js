const userCtrl = {};

const User = require('../models/users');


//funcion que devuleve todos los usuario de la base
userCtrl.getUsers = async  (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        console.log('error barbara:');
        console.log(users);
        res.status(400).json({
            error: err
        });
    }
};


//funcion crea un usuario
userCtrl.createUser = async (req, res) => {
    try {
        
        const { username, email,  pass } = req.body;
        console.log(username)

        const newUser = new User({ 
            username,
            email,
            pass
          
         });
        await newUser.save();
        res.json('User created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};


//funcion que elimina un usuario de la base
userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
};

//funcion muestra un usuario de la base  
userCtrl.getOneUser = async (req, res) => {
    const { id } = req.params;
    await Users.findById(id);
    res.json(users);
}


 

module.exports = userCtrl;