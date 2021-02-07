require('dotenv').config()
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.CONNECTIONSTRING,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();



module.exports = {client}