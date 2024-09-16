import validatePassword from './validatePassword';
import countLettersMap from './countLettersMap';

jest.mock('./countLettersMap', () => jest.fn());

describe('validatePassword', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return false for empty input', () => {
    const result = validatePassword('');
    expect(result).toBe(false);
  });

  it('should return false for invalid format', () => {
    const result = validatePassword('invalidformat');
    expect(result).toBe(false);
  });

  it('should validate password correctly', () => {
    countLettersMap.mockReturnValue(
      new Map([
        ['a', 3],
        ['b', 2],
        ['c', 1]
      ])
    );

    const result1 = validatePassword('a 1-3: aaabbc');
    expect(result1).toBe(true); // 'a' appears 2 times which is in the range 1-3

    const result2 = validatePassword('b 4-5: aaabbc');
    expect(result2).toBe(false);

    const result3 = validatePassword('c 0-1: aaabbc');
    expect(result3).toBe(true);
  });
});
