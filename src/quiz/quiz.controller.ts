import { QuizService } from './quiz.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuizInput } from './quiz.input';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) { }

  @Get()
  async index() {
    return this.quizService.index();
  }

  @Post()
  async create(@Body() input: QuizInput) {
    return this.quizService.create(input);
  }
}
