const generator = require('generate-password');

function createVerificationCode() {
  const code = generator.generate({
    length: 10,
    numbers: true,
  });

  return code;
}

module.exports = {
  createVerificationCode,
};
