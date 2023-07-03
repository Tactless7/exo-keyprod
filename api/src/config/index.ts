export default () => ({
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    name: process.env.DB_NAME || 'keyprod',
  },
  typeorm: {
    type: process.env.DB_TYPEORM_TYPE || 'postgres',
    synchronize: process.env.DB_TYPEORM_SYNCHRONIZE === 'true',
    migrationsRun: process.env.DB_TYPEORM_RUN_MIGRATIONS === 'true',
  },
});
