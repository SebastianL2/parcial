const express = require ('express')
//const path = require ('path')
const bodyParser = require('body-parser');
const router = express.Router()
const {dishes} = require('../resources/dishes')
const marvel = require ('../resources/Marvel.json')
//router.get('/',(req,res)=> res.sendFile(path.join(__dirname,'../View/index.html')))
//router.get('/Formulario',(req,res)=>res.sendFile(path.join(__dirname,'../Formulario/index.html')))

router.use(bodyParser.urlencoded({ extended: false }));
let moviesObj = new Map(Object.entries(marvel))
let movies = new Map()
moviesObj.forEach((v,k)=>{

    movies  = new Map(Object.entries(v))
    
})


router.get('/', (req, res) => {
    // res.sendFile( path.join( __dirname, '../View/index.html'))    
    // }   
    //res.render('index', {title: 'Ejemplo de EJS' , dishes: dishes})
    res.render('index', {title: 'Ejemplo de EJS' , movies: movies, dishes: dishes})
    }
)

router.get('/newDishes', (req, res) => {
    res.render('newDishes', {title: 'Ejemplo de EJS' , movies: movies})
    }
)
router.post('/submit', (req, res) => {
    const name = req.body.name;
  
    // Renderizar la plantilla ejs con los datos del formulario
    res.render('result', { name: name, movies: movies });
  });

  router.post('/submit2', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    // Renderizar la plantilla ejs con los datos del formulario
    res.render('result2', { num1: num1,num2:num2, movies: movies });
  });

router.post('/newDishes', (req, res) => {
    const data = req.body
    console.log(data)
    const {name} = req.body
    const id =+1
    dishes.set(id, {name})
    res.redirect('/')
    }
  
)

/*
router.post('/',(req,res)=>{
    console.log(req.body)
})*/
module.exports = router