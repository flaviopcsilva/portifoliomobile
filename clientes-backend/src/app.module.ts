import * as fs from 'fs';
import * as path from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Cliente } from './cliente/cliente.entity';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
  type: 'postgres',
  host: config.get('DB_HOST'),
  port: config.get('DB_PORT'),
  username: config.get('DB_USER'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_NAME'),
  entities: [Cliente],
  synchronize: true, // SOMENTE DEV
  ssl: {
    ca: fs.readFileSync(
      path.join(__dirname, '..', 'certs', 'ca.pem')
    ).toString(),
  },
}),

    }),
    ClienteModule,
  ],
})
export class AppModule {}
