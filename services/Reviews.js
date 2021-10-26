const ONPO = require('../repositories/ONPO');

class ReviewsApi {
  static get(filter) {
    return new Promise((resolve, reject) => {
      ONPO
        .reviews
        .find(filter)
        .toArray((error, reviews) => {
          if (error) {
            return reject(error);
          }

          return resolve(reviews);
        });
    });
  }
}

module.exports = ReviewsApi;