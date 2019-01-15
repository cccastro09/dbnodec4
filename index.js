var express = require('express');
var exphbs = require('express-handlebars');

const knex = require('./db/knex');

var app = express();

app.set('port', process.env.PORT || 8000);


app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');



//routing
app.get('/',function(req, res){
  //res.type('text/plain');
//  res.send('mi pagina principal');
res.render('home');
});

//routing
app.get('/about',function(req, res){
//  res.type('text/plain');
//  res.send('acerca de mi pagina');
res.render('about');
});

app.get('/user',function(req, res){
//  res.type('text/plain');
//  res.send('acerca de mi pagina');
knex('usuarios')
  .select()
  .then( usuarios => {
  res.render('usuarios',{ objusers: usuarios});

  });
});


//routing
// archivos estaticos y vistas
app.use(express.static(__dirname + '/public'));


app.listen(app.get('port'), function(){
    console.log('express on localhot:' + app.get('port'));
});
