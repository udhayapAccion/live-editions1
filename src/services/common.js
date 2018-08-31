import { ENVIRONMENT } from '../environments';

const getAccount = (user) => {
        return fetch(ENVIRONMENT.API_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
  
      });
}

export default {
    getAccount: getAccount,
  
};




