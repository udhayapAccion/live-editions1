import { ENVIRONMENT } from '../environments';

const getInfo = (user) => {
        return fetch(ENVIRONMENT.API_URL);
}

export default {
  getInfo: getInfo,
  
};




