import { ConfigModel } from './config/ConfigModel';
import Koa from 'koa';

/**
 * Creates and configures a Koa app.
 *
 * @param config mapped app config
 * @returns app that can be run
 */
export function createApp(config: ConfigModel): Koa {
  const app = new Koa();

  return app;
}
