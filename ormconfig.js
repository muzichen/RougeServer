require('dotenv').config()

export default {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.DATABASE_SYNC,
  logging: process.env.DATABASE_LOGGING,
  entities: [
    process.env.DATABASE_ENTITIES
  ],
  cli: {
    entitiesDir: process.env.DATABASE_ENTITIES
  }
}