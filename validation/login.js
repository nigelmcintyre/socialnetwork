// Valildates input on a login
// validator only checks for string so created own isEmpty function
const validator = require('validator');
const isEmpty = require('./is-empty');
module.exports = function loginInput(data) {
  let errors = {};
  //if name input is undefined or null then setting name to empty string to be checked by validator.isEmpty
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
