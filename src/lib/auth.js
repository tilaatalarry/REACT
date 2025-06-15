import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET = 'super_secret_key_change_this';

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePasswords = async (input, stored) => {
  return await bcrypt.compare(input, stored);
};

export const generateToken = (payload) => {
  return jwt.sign(payload, SECRET, { expiresIn: '1d' });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
};
