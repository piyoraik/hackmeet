module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/entity/**/*.js'],
  migrations: ['dist/migration/**/*.js'],
  seeds: ['dist/seeder/seeds/**/*.js'],
  factories: ['dist/seeder/factories/**/*.js'],
  synchronize: false,
  logging: false,
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    seedersDir: 'src/seeder/seeds',
    factoriesDir: 'src/seeder/factories',
  },
};
