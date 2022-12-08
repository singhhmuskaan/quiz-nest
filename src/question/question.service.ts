import { Injectable } from '@nestjs/common';
import { Question } from './question.entity';
import { QuestionInput } from './question.input';
import { Quiz } from '../quiz/quiz.entity';

@Injectable()
export class QuestionService {
  async index() {
    return await Question.find({
      relations: ['quiz'],
    });
  }

  async create(input: QuestionInput) {
    const quiz = await Quiz.findOne({
      where: {
        id: input.quizId,
      },
    });
    const question = new Question();
    Object.assign(question, input);
    question.quiz = quiz;
    return await question.save();
  }
}
