// Valildates input on a new account registration
// validator only checks for string so created own isEmpty function
const validator = require('validator');
const isEmpty = require('./is-empty');
module.exports = function validateRegisterInput(data) {
  let errors = {};
  //if name input is undefined or null then setting name to empty string to be checked by validator.isEmpty
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must between 2 and 30 characters long';
  }
  // Checks for an empty string
  if (validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }
  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
