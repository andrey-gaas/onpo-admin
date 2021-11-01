const ONPO = require('../repositories/ONPO');

class CoursesApi {
  static get(filter = {}) {
    return new Promise((resolve, reject) => {
      ONPO  
        .courses
        .find(filter)
        .toArray((error, courses) => {
          if (error) {
            return reject(error);
          }

          return resolve(courses);
        });
    });
  }

  static async getOne(id) {
    try {
      const course = await ONPO.courses.findOne({ id });
      return course;
    } catch(error) {
      console.log('Error getting course');
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  static add(course) {
    return new Promise((resolve, reject) => {
      let id = 0;
      ONPO
        .courses
        .find()
        .limit(1)
        .sort({ $natural: -1 })
        .toArray(async (error, lastCouse) => {
          if (error) {
            return reject(error.message);
          }
  
          if (lastCouse && lastCouse.length) id = lastCouse[0].id + 1;
  
          course.id = id;
  
          try {
            const newCourse = await ONPO.courses.insertOne(course);
            return resolve(newCourse);
          } catch (error) {
            console.log('Error adding course');
            return reject(error.message);
          }
        });
    });
  }

  static async update(id, changes) {
    try {
      const course = await ONPO.courses.findOneAndUpdate({ id }, { $set: changes }, { returnDocument: "after" });
      return course;
    } catch(error) {
      console.log('Error updating course');
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  static async remove(id) {
    try {
      const removedCourse = await ONPO.courses.findOneAndDelete({ id });
      return removedCourse;
    } catch(error) {
      console.log('Error deleting course');
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = CoursesApi;