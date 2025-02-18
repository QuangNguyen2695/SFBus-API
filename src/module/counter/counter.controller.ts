import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';

@Controller('counter')
export class CounterController {
  constructor() { }
}
