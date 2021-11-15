import axios from 'axios';

class UsersApi {
  static fetchAll() {
    return axios
      .get('/api/users')
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }

  static edit(id, body) {
    return axios
      .put(`/api/users/${id}`, body)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }

  static remove(id) {
    return axios
      .remove(`/api/users/${id}`)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default UsersApi;
