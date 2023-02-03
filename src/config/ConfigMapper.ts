import { ConfigModel } from './ConfigModel';

/**
 * An object that can provide a `ConfigModel` mapped from other sources.
 */
export interface ConfigMapper {
  /**
   * Performs config mapping and returns a config that can be used in the app.
   */
  mapConfig(): ConfigModel;
}
