import { Test, TestingModule } from '@nestjs/testing';
import { BusProvinceController } from './bus-province.controller';
import { BusProvinceService } from './bus-province.service';

describe('BusProvinceController', () => {
  let controller: BusProvinceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusProvinceController],
      providers: [BusProvinceService],
    }).compile();

    controller = module.get<BusProvinceController>(BusProvinceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
