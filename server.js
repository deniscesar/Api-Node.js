var app = require('./lib/index');

app.set('port', process.env.PORT || 80);

var server = app.listen(app.get('port'), function(){
   console.log("Node app is running at localhost");
});