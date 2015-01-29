/**
 * Created by rajeshs on 1/28/2015.
 */
var app = require('./config/express')();

require('./config/routes')(app);

app.listen('3000');
console.log("the web1 app is listening on port 3000");
