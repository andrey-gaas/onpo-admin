import axios from 'axios';

class AuthApi {
  static route = process.env.NODE_ENV === 'development' ?
    'https://auth.gpntbsib.ru/verifytoken/development/'
    : 'https://auth.gpntbsib.ru/verifytoken/';

  static check() {
    return axios
      .get(AuthApi.route)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default AuthApi;
