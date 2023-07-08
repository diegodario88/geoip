import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectGeoIP2, GeoIP2 } from 'nestjs-geoip2';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectGeoIP2()
    private readonly geoIP2: GeoIP2,
  ) {}

  @Get()
  getGeoIP() {
    return this.geoIP2.city('187.32.81.3');
  }
}
