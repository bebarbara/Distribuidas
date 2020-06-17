const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require ('bcrypt-nodejs');

const UserSchema = new Schema ({

     //    idUser: { type: ObjectId, reqired: true},     
     username: {type: String, 
                required: true,
                unique: true},
     avatar: String,           
     pass: { type: String, reqired: true, select: true},
         status: { type: String, default: "Activo"},
         typeUsers: { type: String, default: "Consumidor Final"},
         email: { type: String,
                unique: true,
                 required: true, 
                 lowercase: true},
         date: { type: Date, default: Date.now}
     },
         {
            timestamps: true
        });
        
UserSchema.pre('save', (next)  => { 
 let user = this
 if (!user.isModified('pass'))  return next() 
 
  bcrypt.genSalt(10, (err,salt) => {
    if (err)  return next(err)  
    
  bcrypt.hash (user.pass, salt, null, (err, hash) => {
   if (err) return next(err)

   user.pass = hash
   next()
   })
})

});


module.exports= mongoose.model('User', UserSchema);
