var pg  = require("pg");
var express = require ("express") //why do I have to connect to this server?
var app = express ();

var connectionString = "postgres://admin_urbanstrategies:Oriole197*@urbanstrategies.ck0stywphz0a.ca-central-1.rds.amazonaws.com:5432/projects_urbanstrategies"
app.get('/', function (req,res,next) {
  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.log (err);
      res.status(400).send (err);
    }
    client.query('SELECT * FROM residence', [1], function (err, result) {
      done();
      if (err) {
        console.log (err);
        res.status(400).send(err);
      }
      res.status(200).send(result.rows);
    });
  });
});

app.listen (3000, function () {
  console.log('Server is running on Port 3000')
});
