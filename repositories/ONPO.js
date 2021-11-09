const { MongoClient } = require('mongodb');

class Mongo {
  static database = null;
  static education = null;
  static courses = null;
  static teachers = null;
  static reviews = null;
  static pages = null;

  static connect() {
    const mongoClient = new MongoClient(
      'mongodb://gaas:o9OyV9SEue@mongodb.gpntbsib.ru:27017',
      {useNewUrlParser: true, useUnifiedTopology: true }
    );

    mongoClient.connect((err, database) => {
      if (err) {
        console.log('Error connection to database: ONPO');
        console.log(err.message);
        return;
      }

      Mongo.database = database;
      Mongo.education = database.db('education');
      Mongo.courses = database.db('education').collection('courses');
      Mongo.teachers = database.db('education').collection('teachers');
      Mongo.reviews = database.db('education').collection('reviews');
      Mongo.pages = database.db('education').collection('pages');

      Mongo.patrons = database.db('patrons');
      Mongo.mainUsers = database.db('patrons').collection('users');
      Mongo.users = database.db('patrons').collection('users-onpo');
    });

  }
}

module.exports = Mongo;