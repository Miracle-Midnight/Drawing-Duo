import { Injectable } from '@nestjs/common';

@Injectable()
export class RoomService {
  async findOne(id: number) {
    return { roomNumber: id };
  }
}
