const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://apiBarbi:DdT6Ne1edwTCkPCS@cluster0-3ko9d.mongodb.net/movie?retryWrites=true&w=majority', {
                     
useCreateIndex: true,
useNewUrlParser: true,
useFindAndModify : false
})
.then (db =>console.log('DB is connected'))
.catch(err => console.error(err));

module.exports =mongoose;