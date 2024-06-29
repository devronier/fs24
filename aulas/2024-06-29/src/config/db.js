const pg = require("pg");

const { Pool } = pg;

const pool = new Pool({
  host: "ep-fragrant-band-a5bg6fg3.us-east-2.aws.neon.tech",
  port: 5432,
  user: "pipoca_owner",
  password: "CBhPQ3sKS9mr",
  database: "pipoca",
  max: 100,
  min: 10,
  ssl: true,
});

module.exports = pool;
