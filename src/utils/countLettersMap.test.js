import countLettersMap from './countLettersMap.ts';

describe('countLettersMap', () => {
  it('should count letters correctly', () => {
    const result = countLettersMap('aabbcc');
    expect(result.get('a')).toBe(2);
    expect(result.get('b')).toBe(2);
    expect(result.get('c')).toBe(2);
  });

  it('should ignore non-letter characters', () => {
    const result = countLettersMap('a1!b@c#');
    expect(result.get('a')).toBe(1);
    expect(result.get('b')).toBe(1);
    expect(result.get('c')).toBe(1);
  });

  it('should handle empty strings', () => {
    const result = countLettersMap('');
    expect(result.size).toBe(0);
  });

  it('should handle strings with only non-letter characters', () => {
    const result = countLettersMap('1234!@#$');
    expect(result.size).toBe(0);
  });

  it('should handle strings with mixed cases', () => {
    const result = countLettersMap('AaBbCc');
    expect(result.get('A')).toBe(1);
    expect(result.get('a')).toBe(1);
    expect(result.get('B')).toBe(1);
    expect(result.get('b')).toBe(1);
    expect(result.get('C')).toBe(1);
    expect(result.get('c')).toBe(1);
  });
});