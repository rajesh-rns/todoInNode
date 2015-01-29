/**
 * Created by rajeshs on 1/28/2015.
 */
var app = require('./config/express')();

require('./config/routes')(app);
var port = process.env.PORT || 3000;


app.listen(port);
console.log("the web1 app is listening on port 5000");
