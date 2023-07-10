import { Injectable } from '@nestjs/common';
import { GeoIP2, InjectGeoIP2 } from 'nestjs-geoip2';

@Injectable()
export class AppService {
  constructor(
    @InjectGeoIP2()
    private readonly geoIP2: GeoIP2,
  ) {}

  getGeoIP(ip: string) {
    const response = this.geoIP2.city(ip);
    return response;
  }
}
