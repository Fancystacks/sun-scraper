var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
const db = require("./models");
var PORT = process.env.PORT || 3001;

var routes = require('./routes');

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
}

app.use(routes);


db.sequelize
  .sync()
  .then(function() {
    // ...then start web server
    app.listen(PORT, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log(`Server now running on http://localhost:${PORT}!`);
    });
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the db sync!");
  });

  //Test comments for Mike