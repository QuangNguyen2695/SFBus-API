import { Test, TestingModule } from '@nestjs/testing';
import { BusProvinceService } from './bus-province.service';

describe('BusProvinceService', () => {
  let service: BusProvinceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusProvinceService],
    }).compile();

    service = module.get<BusProvinceService>(BusProvinceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
