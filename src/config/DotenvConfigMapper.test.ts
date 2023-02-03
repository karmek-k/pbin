import { DotenvConfigMapper } from './DotenvConfigMapper';
import { InvalidConfigKeyError } from './InvalidConfigKeyError';

describe('DotenvConfigMapper.mapConfig', () => {
  it('should parse hard-coded env variables', () => {
    const mapper = new DotenvConfigMapper({
      PORT: '1234',
    });

    const config = mapper.mapConfig();

    expect(config.port).toBe(1234);
  });
});

describe('DotenvConfigMapper.envCaseToCamelCase', () => {
  type StringPair = [string, string];

  function performTests(tests: StringPair[]): void {
    tests.forEach(([parameter, value]) =>
      expect(DotenvConfigMapper.envCaseToCamelCase(parameter)).toBe(value)
    );
  }

  function performExceptionTests(tests: string[]): void {
    tests.forEach(parameter =>
      expect(() => DotenvConfigMapper.envCaseToCamelCase(parameter)).toThrow(
        InvalidConfigKeyError
      )
    );
  }

  it('should parse one word env variables in standard format', () => {
    performTests([
      ['PORT', 'port'],
      ['FILENAME', 'filename'],
      ['A123', 'a123'],
    ]);
  });

  it('should parse multiple word env variables in standard format', () => {
    performTests([
      ['PORT_NAME', 'portName'],
      ['ABC_123_DEF', 'abc123Def'],
      ['A_123', 'a123'],
    ]);
  });

  it('should throw an error on incorrect env variable format', () => {
    performExceptionTests([
      '',
      '_FILENAME',
      'fILe_name',
      'A____B',
      '1_ABC',
      'A_B_',
    ]);
  });
});
