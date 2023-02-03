import { DotenvParseOutput } from 'dotenv';
import { ConfigMapper } from './ConfigMapper';
import { ConfigModel } from './ConfigModel';
import { InvalidConfigKeyError } from './InvalidConfigKeyError';

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
    // cannot start with a number, only capital letters, numbers and single underscores
    const regex = /^[A-Z][A-Z0-9]*(_[A-Z0-9]+)*$/;
    if (!regex.test(key)) {
      throw InvalidConfigKeyError.fromKey(key);
    }

    const [firstWord, ...otherWords] = key
      .split('_')
      .map(word => word.toLowerCase());

    const otherWordsCapitalized = otherWords.map(word => {
      const charArray = word.split('');
      charArray[0] = charArray[0].toUpperCase();

      return charArray.join('');
    });

    return firstWord.concat(...otherWordsCapitalized);
  }
}
