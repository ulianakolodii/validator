const countLettersMap = (str: string) => {
  const lettersMap = new Map<string, number>();
  for (const char of str) {
    if (char.match(/[a-zA-Z]/)) {
      const currentCount = lettersMap.get(char) || 0;
      lettersMap.set(char, currentCount + 1);
    }
  }

  return lettersMap;
};

export default countLettersMap;
