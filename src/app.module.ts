import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DishesModule } from './dishes/dishes.module';

@Module({
  imports: [AuthModule, DishesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
