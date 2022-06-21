require("dotenv").config();
const { Pool } = require("pg");

const devConfig = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
};

const productionConfig = {
  //heroku addon
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? productionConfig : devConfig
);
//back

module.exports = {
  query: (text, params) => pool.query(text, params),
};
