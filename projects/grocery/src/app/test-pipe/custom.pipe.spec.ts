import { CustomPipe } from './custom.pipe';

describe('CustomPipe', () => {
  let pipe = new CustomPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize the first letter', () => {
    const result = pipe.transform('hello');
    expect(result).toBe('Hello');
  });

  it('should return an empty string for null or undefined', () => {
    expect(pipe.transform(null as any)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should handle empty string', () => {
    expect(pipe.transform('')).toBe('');
  });
});
