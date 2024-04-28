import { ConfigService } from '@nestjs/config';

const getDbHost = (configService: ConfigService): string => {
  return configService.get('DB_HOST');
};

export { getDbHost };
