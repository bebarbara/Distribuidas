const preferGenCtrl = {};

const PreferGen = require('../models/preferGen');


//funcion que devuleve todos las ordenes de la base
preferGenCtrl.getPreferGens = async (req, res) => {
    try {
        const preferGens = await PreferGen.find();
        res.json(preferGens);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

//función que devuleve todas los géneros favoritos de la base de un cliente dado 
preferGenCtrl.getPreferGensUser = async (req, res) => {
    try {
        const { idUsername} = req.body;
        const preferGens = await Shop.find(
            {idUsername: idUsername }
        );
        res.json(preferGens);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};



//función que crea un genero preferido 
preferGenCtrl.createPreferGen = async (req, res) => {
    try {
        
        const { idUsername, idGenero } = req.body;
        console.log(idUsername)

        const newPreferGen = new PreferGen({ 
            idUsername,
            idGenero
         });
        await newPreferGen.save();
        res.json('Género preferido agregado');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};


//función que elimina un género preferido de la base
preferGenCtrl.deletePreferGen = async (req, res) => {
    const { id } = req.params;
    await PreferGen.findByIdAndDelete(id);
    res.json('Género preferido eliminado');
};

//función muestra un género preferido de la base  
preferGenCtrl.getOnePreferGen = async (req, res) => {
    const { id } = req.params;
    await PreferGen.findById(id);
    res.json(preferGens);
}


 

module.exports = preferGenCtrl;