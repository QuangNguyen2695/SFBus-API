import { Test, TestingModule } from '@nestjs/testing';
import { BusTypeController } from './bus-type.controller';
import { BusTypeService } from './bus-type.service';

describe('BusTypeController', () => {
  let controller: BusTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusTypeController],
      providers: [BusTypeService],
    }).compile();

    controller = module.get<BusTypeController>(BusTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
