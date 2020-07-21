const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'harrypotter123',
    host: 'localhost',
    port: 5432,
    database: 'recipedb'
});

module.exports = pool;