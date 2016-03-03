var express = require('express');

var app = express();
var port = process.env.PORT || 3000; 

app.use(express.static(__dirname)); 

require(__dirname + '/routes')(app);



app.get('*', function(req, res) {
  res.sendFile('index.html', {root: __dirname}); // load our public/index.html file
});

app.listen(port, function() {
  console.log('app running')
});

