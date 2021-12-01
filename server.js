const express = require('express');
const path = require('path');
const ONPO_db = require('./repositories/ONPO');

const app = express();
const PORT = 3003;

// app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE
ONPO_db.connect();

// ROUTES
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/users', require('./routes/users'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
