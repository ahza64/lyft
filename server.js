var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

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
});

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});


app.listen(process.env.MONGODB_URI || 3000, function () {
    console.log('Lyft app listening at http://localhost:3000/');
  });
