const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema ({
    title: {
        type: String,
        required: true,
        trim: true},
    idShops: { type: String, reqired: true},
    status: { type: String, default: "Activo"},
    descrip: { type: String, reqired: true},
    price: { type: Number, reqired: true},
    imagen: { type: String, reqired: true}    
    },
    {
        timestamps: true
    });

module.exports= mongoose.model('Product', ProductSchema);
