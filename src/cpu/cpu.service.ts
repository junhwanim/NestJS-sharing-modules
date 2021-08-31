import { Injectable } from '@nestjs/common';
import { ComputerController } from 'src/computer/computer.controller';
import { PowerService } from 'src/power/power.service';
import { number } from 'yargs';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from Power Service');
    this.powerService.supplyPower(10);
    return a + b;    
  }
}
