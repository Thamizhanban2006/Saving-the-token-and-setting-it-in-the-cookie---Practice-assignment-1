const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your-very-secure-secret';

const encrypt = (payload) => {

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); 
  return token;
};

const decrypt = (token) => {
  try {
 
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err) {
    console.error('Invalid or expired token:', err.message);
    return null;
  }
};

module.exports = {
  encrypt,
  decrypt
};
