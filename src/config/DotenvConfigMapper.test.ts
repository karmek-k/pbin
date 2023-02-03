import { DotenvConfigMapper } from './DotenvConfigMapper';

describe('dotenv mapper tests', () => {
  it('should parse hard-coded env variables', () => {
    const mapper = new DotenvConfigMapper({
      PORT: '1234',
    });

    const config = mapper.mapConfig();

    expect(config.port).toBe(1234);
  });

  it.todo('should parse one word env variables in standard format');

  it.todo('should parse multiple word env variables in standard format');

  it.todo('should throw an error on incorrect env variable format');
});
