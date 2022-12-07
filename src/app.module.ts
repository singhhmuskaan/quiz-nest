import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizModule } from './quiz/quiz.module';
import { QuizController } from './quiz/quiz.controller';
import { QuizService } from './quiz/quiz.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: 'localhost',
      // port: 3306,
      // username: 'root',
      // password: '',
      // database: 'db_quiz',
      host: 'ap-south.connect.psdb.cloud',
      port: 3306,
      database: 'quiz',
      username: 'mm1xs7ind01efqyq0q67',
      password: 'pscale_pw_V1FWlstXY2xtV1dtUZd4HiRssWSeZPMmiBT94bkM5WN',
      ssl: true,
      extra: {
        ssl: {
          ca: '/etc/ssl/certs/ca-certificates.crt',
          rejectUnauthorized: false,
        },
      },
      autoLoadEntities: true,
      synchronize: true,
    }),
    QuizModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
