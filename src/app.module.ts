import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizModule } from './quiz/quiz.module';
import { QuestionModule } from './question/question.module';
import { OptionModule } from './option/option.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_quiz',
      autoLoadEntities: true,
      synchronize: false,
      migrationsTableName: 'typeorm_migrations',
    }),
    QuizModule,
    QuestionModule,
    OptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
