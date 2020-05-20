require("dotenv").config();

const pgp = require("pgp-promise")({});

const db = pgp(process.env.DATABASE_URL);

module.exports = db;
