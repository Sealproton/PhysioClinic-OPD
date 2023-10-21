import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';
import { TreatmentsModule } from './treatments/treatments.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    UserModule,
    AuthModule,
    PatientsModule,
    TreatmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
