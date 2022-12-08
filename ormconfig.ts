import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'db_quiz',
  // host: 'ap-south.connect.psdb.cloud',
  // port: 3306,
  // database: 'quiz',
  // username: 'mm1xs7ind01efqyq0q67',
  // password: 'pscale_pw_V1FWlstXY2xtV1dtUZd4HiRssWSeZPMmiBT94bkM5WN',
  // ssl: true,
  // extra: {
  //     ssl: {
  //         ca: '/etc/ssl/certs/ca-certificates.crt',
  //         rejectUnauthorized: false,
  //     },
  // },
  logging: false,
  synchronize: false,
  name: 'default',
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: ['migration/**/*{.ts,.js}'],
  subscribers: ['src/subscriber/**/*{.ts,.js}'],
});
