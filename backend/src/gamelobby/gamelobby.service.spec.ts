import { Test, TestingModule } from '@nestjs/testing';
import { GamelobbyService } from './gamelobby.service';

describe('GamelobbyService', () => {
  let service: GamelobbyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamelobbyService],
    }).compile();

    service = module.get<GamelobbyService>(GamelobbyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
