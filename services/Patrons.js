const ONPO = require('../repositories/ONPO');

class PatronsApi {
  static get(filter = {}) {
    return new Promise((resolve, reject) => {
      ONPO  
        .mainUsers
        .find(filter)
        .toArray((error, users) => {
          if (error) {
            return reject(error);
          }

          return resolve(users);
        });
    });
  }

  static async getOne(filter = {}) {
    try {
      const user = await ONPO.mainUsers.findOne(filter);
      return user;
    } catch(error) {
      console.log('Error getting user');
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = PatronsApi;
