const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//obtenemos el puerto proporcionado por heroku
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



 
app.get('/', (req, res) => {

     res.render('home', {
         nombre: 'luis anGel'
     });
 });

    app.get('/about', (req,res)=>{
        res.render('about', {
            nombre: 'Jhon jAiRo'
        });
    })
 
app.listen(port, ()=>{
    console.log(`Escuchando peticiones por el puerto ${port}`);
});