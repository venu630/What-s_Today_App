const { Client } = require('pg');

const client = new Client(process.env.PSQL_URL);


module.exports = client;  