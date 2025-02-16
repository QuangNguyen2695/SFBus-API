import { Test, TestingModule } from '@nestjs/testing';
import { BusScheduleService } from './bus-schedule.service';
import { BusScheduleController } from './bus-schedule.controller';

describe('BusScheduleController', () => {
  let controller: BusScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusScheduleController],
      providers: [BusScheduleService],
    }).compile();

    controller = module.get<BusScheduleController>(BusScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
