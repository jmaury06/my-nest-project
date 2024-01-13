import { Module, Global } from '@nestjs/common';

const API_KEY_DEV = 'DEVELOPMENT';
const API_KEY_PROD = 'PRODUCTION';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY_DEV,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
