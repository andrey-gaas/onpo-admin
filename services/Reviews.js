const ONPO = require('../repositories/ONPO');

class ReviewsApi {
  static get(filter = {}) {
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

  static async getOne(id) {
    try {
      const review = await ONPO.reviews.findOne({ id });
      return review;
    } catch(error) {
      console.log('Error getting comment');
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = ReviewsApi;