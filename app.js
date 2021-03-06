var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
var multer = require('multer');
var methodOverride = require("method-override")
var file = multer({ dest: './uploads/' });
global.__root   = __dirname + '/';
app.set("view engine","ejs");

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('./uploads',express.static('uploads'));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.get('/api', function (req, res) {
  res.status(200).send('hii');
});

var UserController = require(__root + 'user/controller/UserController');
app.use('/api/user', UserController);



var server = app.listen(process.env.PORT, function() {
  console.log('Express server listening on port ');
});
