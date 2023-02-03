import { DotenvParseOutput } from 'dotenv';
import { ConfigMapper } from './ConfigMapper';
import { ConfigModel } from './ConfigModel';

/**
 * Provides app config based on environment variables provided by `dotenv`.
 */
export class DotenvConfigMapper implements ConfigMapper {
  constructor(protected dotenvOutput: DotenvParseOutput) {}

  mapConfig(): ConfigModel {
    // TODO implement automatic mapping
    return {
      port: parseInt(this.dotenvOutput.PORT),
    };
  }
}
