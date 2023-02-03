import { ConfigMapper } from './config/ConfigMapper';
import { DefaultConfigMapper } from './config/DefaultConfigMapper';
import { DotenvConfigMapper } from './config/DotenvConfigMapper';
import dotenv from 'dotenv';
const parsedEnv = dotenv.config();
import { createApp } from './app';

let configMapper: ConfigMapper;
if (!parsedEnv.parsed) {
  console.error(
    'Cannot parse config from environment variables; using default config'
  );

  if (parsedEnv.error) {
    console.error(`Error message: ${parsedEnv.error.message}`);
  }

  configMapper = new DefaultConfigMapper();
} else {
  configMapper = new DotenvConfigMapper(parsedEnv.parsed);
}

const config = configMapper.mapConfig();

createApp(config).listen(config.port);
