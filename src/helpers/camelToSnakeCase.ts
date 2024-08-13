export const camelToSnakeCase = (str: string): string => {
  return str
    .split("")
    .map((char, idx) => {
      if (/[A-Z]/.test(char))
        return idx === 0 ? char.toLowerCase() : "_" + char.toLowerCase();
      else return char;
    })
    .join("");
};
