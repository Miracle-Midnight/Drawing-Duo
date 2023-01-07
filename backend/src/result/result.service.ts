import { Injectable } from '@nestjs/common';

@Injectable()
export class ResultService {
  async findOne(id: number) {
    return { resultId: id };
  }
}
