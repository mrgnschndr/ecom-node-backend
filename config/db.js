const { Pool } = require('pg');

const params = {
    user: 'mrgnschndr',
    host: 'localhost',
    database: 'ecommerce'
}
const pool = new Pool(params);

if (pool) {
    console.log("Connection Successful.")
}

module.exports = pool; // export the instance