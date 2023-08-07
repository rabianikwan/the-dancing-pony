import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import * as process from 'process';
import { AuthModule } from './auth/auth.module';
import { RateModule } from './rate/rate.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'timetracking',
      entities: [path.join(process.cwd(), 'dist/**/*.entity.js')],
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    RateModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}