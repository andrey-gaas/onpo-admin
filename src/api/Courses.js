import axios from 'axios';

class CoursesApi {
  static fetchAll() {
    return axios
      .get('/api/courses')
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }

  static fetchOne(id) {
    return axios
      .get(`/api/courses/${id}`)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }

  static add(body) {
    return axios
      .post('/api/courses', body)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }

  static edit(id, body) {
    return axios
      .put(`/api/courses/${id}`, body)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }

  static remove(id) {
    return axios
      .delete(`/api/courses/${id}`)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default CoursesApi;
