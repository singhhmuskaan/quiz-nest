import { Injectable } from '@nestjs/common';
import { Question } from './question.entity';
import { QuestionInput } from './question.input';

@Injectable()
export class QuestionService {

    async index(){
        return await Question.find();
    }

    async create(input: QuestionInput){
        const question = new Question();
        Object.assign(question, input);
        return await question.save();
    }
}
