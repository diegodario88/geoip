import { Controller, Get, Ip, Logger, Res } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { cwd } from 'process';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  index(@Res() response: Response) {
    const index = readFileSync(join(cwd(), 'public/index.html')).toString();
    response.type('text/html').send(index);
  }

  @Get('/geoip')
  getGeoIP(@Ip() ip: string) {
    Logger.warn(`Ip Address ${ip}`, AppController.name);
    /**
     * Passa um endereço qualquer. Está martelado mas seria dinâmico
     */
    return this.appService.getGeoIP('187.32.81.3');
  }
}
