const ONPO = require('../repositories/ONPO');

class UsersApi {
  static get(filter = {}) {
    return new Promise((resolve, reject) => {
      ONPO  
        .users
        .find(filter)
        .toArray((error, users) => {
          if (error) {
            return reject(error);
          }

          return resolve(users);
        });
    });
  }

  static async getOne(id) {
    try {
      const user = await ONPO.users.findOne({ id });
      return user;
    } catch(error) {
      console.log('Error getting user');
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  static add(_id) {
    return new Promise((resolve, reject) => {
      let id = 0;
      const user = {
        right: 'user',
      };

      ONPO
        .users
        .find()
        .limit(1)
        .sort({ $natural: -1 })
        .toArray(async (error, lastUser) => {
          if (error) {
            return reject(error.message);
          }
  
          if (lastUser && lastUser.length) id = lastUser[0].id + 1;
  
          user.id = id;
          user.info = {
            '$ref': 'users',
            '$id': _id,
          };
  
          try {
            await ONPO.reviews.insertOne(user);
            return resolve(id);
          } catch (error) {
            return reject(error.message);
          }
        });
    });
  }

  static async update(id, changes) {
    try {
      const user = await ONPO.users.findOneAndUpdate({ id }, { $set: changes }, { returnDocument: "after" });
      return user;
    } catch(error) {
      console.log('Error user updating');
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  static async remove(id) {
    try {
      const removedUser = await ONPO.users.findOneAndDelete({ id });
      return removedUser.value;
    } catch(error) {
      console.log('Error deleting user');
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = UsersApi;
