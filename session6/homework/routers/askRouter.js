const express = require('express');
const questionController = require('../controller/questionController');
const Router = express.Router();

Router.get('/', function(req,res){
  res.render('ask');
});

Router.post('/',function(req,res){
  try {
    questionController.creat(req.body.question)

  } catch (ex) {
    console.log(ex);
  }
});
module.exports = Router;
