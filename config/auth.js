const dotenv = require('dotenv').config();

module.exports = {
    secret: process.env.AUTH_SECRET || "pato",
    expires: process.env.AUTH_EXPIRES|| "id",
    rounds: process.env.AUTH_ROUNDS || 10

}