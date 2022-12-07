import { Injectable } from '@nestjs/common';
import { Quiz } from './quiz.entity';
import { QuizInput } from './quiz.input';

@Injectable()
export class QuizService {

  async index() {
    return await Quiz.find();
  }

    async create(input: QuizInput ) {
        const quiz = new Quiz();
        Object.assign(quiz, input);
        return await quiz.save();
      }
}
