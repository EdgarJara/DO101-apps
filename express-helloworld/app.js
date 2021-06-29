var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

<<<<<<< HEAD
app.get('/sammael', function(req, res) {
  res.send('Hello Sammael...!\n');
=======
app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
>>>>>>> 3b07203a6679616422b7188e846f811f6376652b
  });

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});