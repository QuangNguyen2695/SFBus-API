import { Test, TestingModule } from '@nestjs/testing';
import { BusRouteController } from './bus-route.controller';
import { BusRouteService } from './bus-route.service';

describe('BusRouteController', () => {
  let controller: BusRouteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusRouteController],
      providers: [BusRouteService],
    }).compile();

    controller = module.get<BusRouteController>(BusRouteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
