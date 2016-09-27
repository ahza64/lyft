var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var albums = [
  {
    title: 'Cupid Deluxe',
    artist: 'Blood Orange'
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'Fake History',
    artist: 'letlive.'
  }
];

app.get('/api/albums', function (req, res){
  res.send(albums);
  console.log(albums);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
  // console.log(req);
  // console.log(res);
});


app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening at http://localhost:3000/');
  });
