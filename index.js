const express = require ('express'); //npm i express-handlebars
const hbs = require ('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
require ('dotenv').config // npm i dotenv
const nasaApp = require('./lib/nasaAPI');
const harryPotter = require('./lib/harrypotter');
const cocktail = require('./lib/cocktail');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');

app.get('/', async (req, res) => { // localhost:3000/ home page
    res.render('home');
});

app.get('/nasa', async (req,res) => {
    let data = await nasaApp.getNasaPic()
    console.log(data)
    let pic = data.hdurl
    let expl = data.explanation
    res.render('nasa', {data , pic, expl})
})

app.get ('/harrypotter', async(req,res) => {
    let data = await harryPotter.sortingHat();
    console.log(data)
    res.render('harrypotter', {data})
});



app.get('/cocktail', async (req,res) => {
    let data = await cocktail.getRandomCocktail()
    console.log(data)
    let name = data.drinks[0].strDrink
    let glass = data.drinks[0].strGlass
    let method = data.drinks[0].strInstructions
    let ing1 = data.drinks[0].strIngredient1
    let ing2 = data.drinks[0].strIngredient2
    let ing3 = data.drinks[0].strIngredient3
    let ms1 = data.drinks[0].strMeasure1
    let ms2 = data.drinks[0].strMeasure2
    let ms3 = data.drinks[0].strMeasure3
    let pic = data.drinks[0].strDrinkThumb
    res.render('cocktail', {name, glass, method, ing1, ing2, ing3, pic, ms1, ms2, ms3})
})

app.get('*', (req,res) => {
    res.render('404', {
        message: "this page does not exist, please go back to the previous page"
    });
});


app.listen(3000,() => { // localhost:3000 but can be any port between 3000-8000 i think
    console.log("listening on port 3000"); 
})