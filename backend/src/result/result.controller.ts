import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { ResultService } from './result.service';

@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
    return this.resultService.findOne(id);
  }
}
