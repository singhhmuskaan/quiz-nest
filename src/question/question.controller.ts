import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionInput } from './question.input';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    constructor(private questionService: QuestionService){}

    @Get()
    async index(){
        return this.questionService.index();
    }

    @Post()
    async create(@Body() input: QuestionInput) {
        return this.questionService.create(input);
    }
}
