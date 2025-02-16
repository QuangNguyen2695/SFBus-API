import { Test, TestingModule } from '@nestjs/testing';
import { BusStationController } from './bus-station.controller';
import { BusStationService } from './bus-station.service';

describe('BusStationController', () => {
  let controller: BusStationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusStationController],
      providers: [BusStationService],
    }).compile();

    controller = module.get<BusStationController>(BusStationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
