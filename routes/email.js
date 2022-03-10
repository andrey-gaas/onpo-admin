const { Router } = require('express');

const router = new Router();

router.get('/send', (req, res) => {
  res.send('ok');
});

module.exports = router;
