const express = require('express');
const path = require('path');
let app = express();

app.use(express.static('public'));

app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname + '/public/bio.html'))
});

app.get('/frontendpractice', (req, res)=>{
  res.sendFile(path.resolve(__dirname + '/public/test.html'))
});

app.get('/flexbox', (req, res)=>{
  res.sendFile(path.resolve(__dirname + '/public/btvn3.html'))
});

app.listen(5000, (err)=>{
  if(err) { console.log(err); }
  console.log("App is running at port 5000");
});
