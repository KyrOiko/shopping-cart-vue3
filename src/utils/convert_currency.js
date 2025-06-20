function convertCentsToEuros(cents) {
  return Number((cents / 100).toFixed(2));
}

export { convertCentsToEuros };
