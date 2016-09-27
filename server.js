var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});


app.listen(process.env.PORT || 3000, function () {
    console.log('Lyft app listening at http://localhost:3000/');
  });
