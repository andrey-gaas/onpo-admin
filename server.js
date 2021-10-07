const express = require('express');
const config = require('config');
const path = require('path');

const app = express();
const PORT = config.get('port');

app.use(express.json({ exptended: true }));

// ROUTES

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

/* async function start() {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch(e) {
    console.error('Server naebnulsa', e);
    process.exit();
  }
}

start(); */
