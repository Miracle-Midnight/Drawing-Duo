import { Test, TestingModule } from '@nestjs/testing';
import { GamelobbyController } from './gamelobby.controller';

describe('GamelobbyController', () => {
  let controller: GamelobbyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamelobbyController],
    }).compile();

    controller = module.get<GamelobbyController>(GamelobbyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
