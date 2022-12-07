import { QuizService } from './quiz.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuizInput } from './quiz.input';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) { }

  @Get()
  async index() {
    return this.quizService.index();
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    return this.quizService.show(id);
  }

  @Post()
  async create(@Body() input: QuizInput) {
    return this.quizService.create(input);
  }
}
