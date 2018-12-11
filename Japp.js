const express = require('express');
const app = express();
var parse = require('url-parse');
var pg = require('pg');
var format = require('pg-format');
var url = parse('postgres://admin_urbanstrategies:Oriole180*@urbanstrategies.ck0stywphz0a.ca-central-1.rds.amazonaws.com: 5432/projects_urbanstrategies',true); //this outputs a configured url. I need to hide the password. How?

console.log(url)
 // const config = {
 //   username: url[1],
 //   password: url[2],
 //   hostname: url[3],
 //   port: url[4],
 //   database: a
//
//   max:  10,
//   idleTimeoutMS: 30000,
// }
//
// var pool = new pg.Pool(config)
// var myClient
//
// pool.connect(function (err,client,done) {
//   if (err) console.log(err)
//   app.listen(3000,function() {
//     console.log('listening on 3000')
//   })
//   myClient = myClient
//   var residenceQuery = format('SELECT * FROM residence.residence')
//   myClient.query(residenceQuery, function (err, result) {
//     if(err) {
//       console.log(err)
//     }
//     console.log(result.rows[0])
//   })
// })
