const {Pool, Client} = require('pg');
const connectionString = 'postgresql://admin_urbanstrategies:Oriole197*@urbanstrategies.ck0stywphz0a.ca-central-1.rds.amazonaws.com:5432/projects_urbanstrategies'
const pool = new Pool ({
  connectionString: connectionString,})

pool.query('SELECT NOW()',(err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client ({connectionString: connectionString
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  document.getElementById('output').innerHTML = "check the console"
  client.end()
})
