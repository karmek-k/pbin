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

  /**
   * Converts from `ENV_CASE` to `camelCase`.
   *
   * For example `DB_HOST` -> `dbHost`.
   *
   * @param key environment variable key
   */
  static envCaseToCamelCase(key: string): string {
    const regex = /^[A-Z](_[A-Z0-9])*$/;
    if (!regex.test(key)) {
      throw InvalidConfigKeyError.fromKey(key);
    }

    const words = key.split('_').map(word => word.toLowerCase());

    return '';
  }
}

export class InvalidConfigKeyError extends Error {
  static fromKey(key: string): InvalidConfigKeyError {
    return new this(`Invalid config key: ${key}`);
  }
}
