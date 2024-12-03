export const convertBase = (
    value: string,
    fromBase: number,
    toBase: number
  ): string => {
    try {
      const decimal = parseInt(value, fromBase);
      if (isNaN(decimal)) throw new Error('Invalid number for the given base');
      return decimal.toString(toBase);
    } catch (error) {
      throw new Error('Invalid conversion');
    }
  };