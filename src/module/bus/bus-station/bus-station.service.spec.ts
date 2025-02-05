import { Test, TestingModule } from '@nestjs/testing';
import { BusStationService } from '../bus-Station/bus-Station.service';

describe('BusStationService', () => {
  let service: BusStationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusStationService],
    }).compile();

    service = module.get<BusStationService>(BusStationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
