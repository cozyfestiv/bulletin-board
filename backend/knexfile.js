require('dotenv').config()
const path = require('path')

module.exports = {
  development: {
    client: 'postgresql',
    pool: { min: 1, max: 2 },
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  },
  production: {
    client: 'postgresql',
    pool: { min: 1, max: 2 },
    connection: process.env.DATABASE_URL_PRODUCTION,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  }
}
