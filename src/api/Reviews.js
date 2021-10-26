import axios from 'axios';

class ReviewsApi {
  static fetchAll() {
    return axios
      .get('/api/reviews')
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }

  static fetchOne(id) {
    return axios
      .get(`/api/reviews/${id}`)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }

  static add(body) {
    return axios
      .post('/api/reviews', body)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }

  static edit(id, body) {
    return axios
      .put(`/api/reviews/${id}`, body)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }

  static remove(id) {
    return axios
      .remove(`/api/reviews/${id}`)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default ReviewsApi;
