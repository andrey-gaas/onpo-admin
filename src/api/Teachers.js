import axios from 'axios';

class UsersApi {
  static fetchAll() {
    return axios
      .get('/api/teachers')
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default UsersApi;
