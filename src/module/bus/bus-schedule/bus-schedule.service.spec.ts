import { Test, TestingModule } from '@nestjs/testing';
import { BusScheduleService } from './bus-schedule.service';

describe('BusScheduleService', () => {
  let service: BusScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusScheduleService],
    }).compile();

    service = module.get<BusScheduleService>(BusScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
