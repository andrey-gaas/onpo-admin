const { Router } = require('express');
const CoursesApi = require('../services/Courses');

const router = Router();

router.get('/', async (req,  res) => {
	try {
		const courses = await CoursesApi.get();
    
    res.send(courses);
	} catch (error) {
		console.log(error.message);
		console.log('Ошибка в /api/courses');
		res.status(500).send('Ошибка загрузки списка курсов');
	}
});

router.get('/:id', async (req, res) => {
	const id = +req.params.id;

	try {
		const course = await CoursesApi.getOne(id);

		res.send(course);
	} catch(error) {
		console.log('Ошибка в /api/courses/:id');
		res.status(500).send('Ошибка загрузки курса');
	}
});

router.post('/', async (req, res) => {
	const body = req.body;

	try {
		const id = await CoursesApi.add(body);

		const course = await CoursesApi.getOne(id);

		res.send(course);
	} catch(error) {
		console.log(error.message);
		console.log('Ошибка в POST /api/courses');
		res.status(500).send('Ошибка создания курса');
	}
});

router.put('/:id', async (req, res) => {
	const id = +req.params.id;
	const changes = req.body;

	try {
		const result = await CoursesApi.update(id, changes);

		res.send(result.value);
	} catch(error) {
		console.log('Ошибка в PUT /api/courses/:id');
		res.status(500).send('Ошибка при редактировании курса. Обновите страницу и попробуйте еще раз.');
	}
});

router.delete('/:id', async (req, res) => {
	const id = +req.params.id;

	try {
		await CoursesApi.remove(id);

		res.send('OK');
	} catch(error) {
		console.log('Ошибка в DELETE /api/courses/:id');
		res.status(500).send('Ошибка при удалении курса.');
	}
});

module.exports = router;