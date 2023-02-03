import { ConfigModel } from './ConfigModel';
import { ConfigMapper } from './ConfigMapper';

/**
 * Provides a default hard-coded config for development purposes
 */
export class DefaultConfigMapper implements ConfigMapper {
  mapConfig(): ConfigModel {
    return {
      port: 8000,
    };
  }
}
