const { reviews } = require('../repositories/ONPO');

class ReviewsApi {
  static get(filter = {}) {
    return new Promise((resolve, reject) => {
      reviews
        .find(filter)
        .toArray((error, reviews) => {
          if (error) {
            return reject(error);
          }

          return resolve(reviews);
        });
    });
  }

  static async getOne(id) {
    try {
      const review = await reviews.findOne({ id });
      return review;
    } catch(error) {
      console.log('Error getting comment');
      console.log(error.message);
      return new Error({ error: error.message });
    }
  }
}

module.exports = ReviewsApi;