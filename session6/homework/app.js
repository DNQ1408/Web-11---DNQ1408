const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// ------------------------------------------------------------------------------

const homeRouter = require('./routers/homeRouter');
const askRouter = require('./routers/askRouter');
const questionRouter = require('./routers/questionRouter');
const fileController = require('./fileController');

// -----------------------------------------------------------------

mongoose.connect('mongodb://localhost/test', (err)=>{
  if (err) console.log(err);
  console.log('Database connected');
});
// -----------------------------------------------------------------
let app = express();
app.engine('handlebars',handlebar({defaultLayout: 'main'}));
app.set('view engine','handlebars');
app.use(bodyParser.urlencoded({extended: false}));

// -------------------------------------------------------------------


app.use('/',homeRouter);
app.use('/ask',askRouter);
app.use('/question',questionRouter)


app.use(express.static('public'));


app.listen(5000, function(err){
  if (err){
    console.log(err);
  }
  console.log("App is start at port 5000");
});
// nodemon -e html,css app.js
