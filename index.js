const { encrypt, decrypt } = require('./script');

const payload = {
  id: 101,
  username: 'codebuddy_user',
  role: 'member'
};

const token = encrypt(payload);
console.log('JWT Token:', token);

const decoded = decrypt(token);
console.log('Decoded Payload:', decoded);
