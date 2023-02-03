export class InvalidConfigKeyError extends Error {
  static fromKey(key: string): InvalidConfigKeyError {
    return new this(`Invalid config key: ${key}`);
  }
}
