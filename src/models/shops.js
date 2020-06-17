const mongoose = require('mongoose');
const { Schema } = mongoose;

const ShopSchema = new Schema ({
    //idShop: { type: ObjectId, reqired: true},
    shopname: {
        type: String,
        required: true,
        unique: true,
        trim: true},
        idUser: { type: String, reqired: true},
        status: { type: String,  default: "Activo"},
        category: { type: String,  default: "Todos"},
        photo: { type: String, reqired: true},
        adrress: { type: String, reqired: true},
        email: { type: String, reqired: true}
},
{
    timestamps: true
});

module.exports= mongoose.model('Shop', ShopSchema);
