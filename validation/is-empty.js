// Global function to check if anything(string/object) is empty
const isEmpty = value =>
  value === undefined ||
  value === null ||
  // checks if object is empty be checking for keys
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  // remove whitespace from string anf check that it is not empty
  (typeof value === 'string' && value.trim().length === 0);

module.exports = isEmpty;
