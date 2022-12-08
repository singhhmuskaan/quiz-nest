import { Body, Controller, Get, Post } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionInput } from './option.input';

@Controller('option')
export class OptionController {
  constructor(private optionService: OptionService) {}

  @Get()
  async index() {
    return this.optionService.index();
  }

  @Post()
  async create(@Body() input: OptionInput) {
    return this.optionService.create(input);
  }
}
