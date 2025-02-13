// import app from './app.js';
// import dotenv from 'dotenv';
// dotenv.config();

// const PORT = process.env.PORT || 3000;

// const server = app.listen(PORT, () => {
//   console.log(`Server started at http://localhost:${PORT}`);
// });

// export default server;



import app from './app.js';
import config from './config/config.js';

const server = app.listen(config.port, () => {
  console.log(`Server started at http://localhost:${config.port}`);
});

export default server;
