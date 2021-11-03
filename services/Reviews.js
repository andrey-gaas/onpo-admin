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

  static add(review) {
    return new Promise((resolve, reject) => {
      let id = 0;
      ONPO
        .reviews
        .find()
        .limit(1)
        .sort({ $natural: -1 })
        .toArray(async (error, lastReview) => {
          if (error) {
            return reject(error.message);
          }
  
          if (lastReview && lastReview.length) id = lastReview[0].id + 1;
  
          review.id = id;
  
          try {
            await ONPO.reviews.insertOne(review);
            return resolve(id);
          } catch (error) {
            return reject(error.message);
          }
        });
    });
  }

  static async update(id, changes) {
    try {
      const review = await ONPO.reviews.findOneAndUpdate({ id }, { $set: changes }, { returnDocument: "after" });
      return review;
    } catch(error) {
      console.log('Error updating comment');
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  static async remove(id) {
    try {
      const removedReview = await ONPO.reviews.findOneAndDelete({ id });
      return removedReview.value;
    } catch(error) {
      console.log('Error deleting comment');
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = ReviewsApi;