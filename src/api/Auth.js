import axios from 'axios';

class AuthApi {
  static check() {
    return axios
      .get('http://auth.gpntbsib.ru/verifytoken')
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default AuthApi;
