import countLettersMap from "./countLettersMap.ts";

const validatePassword = (str: string) => {
  if (str.trim() === "") {
    return false;
  }
  const [rulePart = "", password = ""] = str.split(": ");
  const [letter = "", range = ""] = rulePart.split(" ");
  const [minRange, maxRange] = range.split("-");
  const letterCount = countLettersMap(password)?.get(letter) || 0;
  return Number(minRange) <= letterCount && letterCount <= Number(maxRange);
};

export default validatePassword;
