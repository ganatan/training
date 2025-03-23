import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  useDatabase: process.env.USE_DATABASE === 'true',
};
