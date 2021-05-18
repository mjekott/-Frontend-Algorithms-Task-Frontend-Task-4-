function convertFahrToCelsius(parameter) {
  if (Array.isArray(parameter))
    return `${JSON.stringify(parameter)} is not a valid number but a/an array.`;

  if (isNaN(+parameter))
    return `${JSON.stringify(
      parameter
    )} is not a valid number but a/an ${typeof parameter}.`;

  const result = ((parameter - 32) * 5) / 9;

  return `${result.toFixed(4)}`;
}

module.exports = convertFahrToCelsius;
