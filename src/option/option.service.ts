import { Injectable } from '@nestjs/common';
import { Option } from './option.entity';
import { OptionInput } from './option.input';
import { Question } from '../question/question.entity';

@Injectable()
export class OptionService {
  async index() {
    return await Option.find({
      relations: ['question'],
    });
  }

  async create(input: OptionInput) {
    const question = await Question.findOne({
      where: {
        id: input.questionId,
      },
    });
    const option = new Option();
    Object.assign(option, input);
    option.question = question;
    return await option.save();
  }
}
