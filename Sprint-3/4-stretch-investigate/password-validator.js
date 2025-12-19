// Array for storing previous passwords
const previousPasswords = [];

function isValidPassword(password, previousPasswords = []) {
  // 1. minimum length of 5 characters
  if (password.length < 5) return false;

  // 2. There is at least one capital letter
  if (!/[A-Z]/.test(password)) return false;

  // 3. There is at least one lowercase letter
  if (!/[a-z]/.test(password)) return false;

  // 4. There is at least one number
  if (!/[0-9]/.test(password)) return false;

  // 5. There is at least one special character from the list
  if (!/[!#$%.*&]/.test(password)) return false;

  // 6. The password must not be repeated.
  if (previousPasswords.includes(password)) return false;

  // If all checks have been passed, add the password to the history and return it, then true
  previousPasswords.push(password);
  return true;
}

module.exports = isValidPassword;
