export const extractFirstLetterAsUppercase = (
  word: string | undefined
): string => {
  return !word ? '' : word.charAt(0).toUpperCase();
};

export const capitalize = (word: string | undefined): string => {
  return !word ? '' : extractFirstLetterAsUppercase(word) + word.slice(1);
};

export const getInitialsFromFullName = (value: string | undefined): string => {
  if (!value) {
    return '';
  }

  const nameSplit =
    value
      .replace(/[^a-z ]/gi, ' ')
      .replace(/[\s]+/gi, ' ')
      .split(' ') || [];

  if (!nameSplit) {
    return '';
  }

  if (nameSplit.length === 1) {
    return extractFirstLetterAsUppercase(nameSplit[0]);
  }

  return `${extractFirstLetterAsUppercase(
    nameSplit[0]
  )}${extractFirstLetterAsUppercase(nameSplit[1])}`;
};
