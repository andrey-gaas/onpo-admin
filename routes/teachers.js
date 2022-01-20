const { Router } = require('express');
const TeachersService = require('../services/Teachers');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const teachers = await TeachersService.get();
    res.send(teachers);
  } catch(e) {
    console.log('Ошибка в /api/teachers/');
    console.log(e.message);
    res.status(500).send('Ошибка загрузки списка преподавателей');
  }
});

module.exports = router;
