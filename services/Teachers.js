const ONPO = require('../repositories/ONPO');

class TeachersService {
  static get(filter = {}) {
    return new Promise((resolve, reject) => {
      ONPO  
        .teachers
        .find(filter)
        .toArray((error, teachers) => {
          if (error) {
            return reject(error);
          }

          return resolve(teachers);
        });
    });
  }
}

module.exports = TeachersService;