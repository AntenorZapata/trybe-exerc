const assert = require('assert');

const PasswordVerifier = (pass) => {
  let count = 0;

  if (pass === null) return false;
  count += 1;
  if (/[A-Z]/.test(pass)) count += 1;
  if (/\d/.test(pass)) count += 1;
  if (pass.length <= 8) count += 1;

  return count >= 3 && /[a-z]/.test(pass);
};

assert.strictEqual(PasswordVerifier('123a5678A'), true);
assert.strictEqual(PasswordVerifier(null), false);
assert.strictEqual(PasswordVerifier('dsjdhfjdjA'), false);
assert.strictEqual(PasswordVerifier('DJFJFjdjWh1t3'), true);
