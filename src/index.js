const  express= require ('express'); 
const  path= require ('path'); 
const exphbs = require ('express-handlebars');
const methodOverride= require ('method-override');
const session = require ('express-session');
const { mongoose } = require ('./database');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//inicializaciones 
const app = express();
 

// configure body-parser

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


require ('./database');

//settings toda las configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine ('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');   
    
    
    
//middlewares todas las funciones antes de pasarlas a las rutas
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extend: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUnitialized: true
}));
//Bloque de código para que habilitar CORS  
  
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})
// global variables
//routtes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/preferGens'));


// archivos estaticos
console.log(__dirname)

app.use(express.static(path.join(__dirname, 'public')));

//inicializacion de servidor
app.listen(app.get('port' ), () => {
    console.log('Server o port ', app.get('port'));    
});