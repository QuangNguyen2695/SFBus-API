import { Test, TestingModule } from '@nestjs/testing';
import { BusServiceController } from './bus-service.controller';
import { BusServiceService } from './bus-service.service';

describe('BusServiceController', () => {
  let controller: BusServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusServiceController],
      providers: [BusServiceService],
    }).compile();

    controller = module.get<BusServiceController>(BusServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
