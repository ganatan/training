import { appInfo, applicationBase } from './environment.common';

export const environment = {
  appInfo,
  application: {
    ...applicationBase,
    angular: `${applicationBase.angular} DEV`,
  },
  useDatabase: false,
  // backend-javascript
  backend: 'http://localhost:3000',
  // backend-java
  // backend: 'http://localhost:8089/backend-java-prototype',
  urlNews: './assets/params/json/mock/trailers.json',
  urlMovies: './assets/params/json/mock/movies.json',
};