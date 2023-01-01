import { Controller, Get, Param, Render } from '@nestjs/common';
import { ResultService } from './result.service';

@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Get(':id')
  @Render('result')
  async findOne(@Param('id') id: string) {
    return this.resultService.findOne(+id);
  }
}
