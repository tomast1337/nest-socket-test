import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { NotificationModule } from './notification/notification.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Adjust the path to your static files
    }),
    NotificationModule,
  ],
  providers: [AppService],
})
export class AppModule {}
