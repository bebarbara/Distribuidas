const mongoose = require('mongoose');
const { Schema } = mongoose;

const preferGenSchema = new Schema ({

         //idOrder: { type: ObjectId, reqired: true},
         idUsername: { type: String, reqired: true},
         idGenero: { type: Number, reqired: true}
   
},
{
    timestamps: true
});

module.exports= mongoose.model('PreferGen', preferGenSchema);
