import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GeoIP2Module } from 'nestjs-geoip2';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    GeoIP2Module.forRoot({
      config: {
        file: join(process.cwd(), 'src/data', 'GeoLite2-City.mmdb'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
