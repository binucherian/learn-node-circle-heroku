var express = require('express');
//var path = require('path');
var app = express();

var port = process.env.PORT || 5000;

app.set('view engine','ejs');
//app.set('views',path.join(__dirname,'src/views'));
app.set('views','./src/views');

app.get('/', function(req,res){
   res.render('index') ;
});


app.listen(port, function(err){
    console.log('listen on port '+ port);
});

module.exports.getApp = app;