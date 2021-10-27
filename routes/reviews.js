const { Router } = require('express');
const ReviewsApi = require('../services/Reviews');

const router = Router();

router.get('/', async (req,  res) => {
	try {
		const reviews = await ReviewsApi.get();
    
    res.send(reviews);
	} catch (error) {
		console.log(error.message);
		console.log('Ошибка в /api/reviews');
		res.status(500).send('Ошибка загрузки списка комментариев');
	}
});

router.get('/:id', async (req, res) => {
	const id = +req.params.id;

	try {
		const review = await ReviewsApi.getOne(id);

		res.send(review);
	} catch(error) {
		console.log('Ошибка в /api/reviews/:id');
		res.status(500).send('Ошибка загрузки комментария');
	}
});

router.post('/', async (req, res) => {
	const review = req.body;

	try {
		await ReviewsApi.add(review);

		res.send('OK');
	} catch(error) {
		console.log(error.message);
		console.log('Ошибка в POST /api/reviews');
		res.status(500).send('Ошибка создания комментария');
	}
});

router.put('/:id', async (req, res) => {
	const id = +req.params.id;
	const changes = req.body;

	try {
		await ReviewsApi.update(id, changes);

		res.send('OK');
	} catch(error) {
		console.log('Ошибка в PUT /api/reviews/:id');
		res.status(500).send('Ошибка при редактировании комментария.');
	}
});

router.delete('/:id', async (req, res) => {
	const id = +req.params.id;

	try {
		await ReviewsApi.remove(id);

		res.send('OK');
	} catch(error) {
		console.log('Ошибка в DELETE /api/reviews/:id');
		res.status(500).send('Ошибка при удалении комментария.');
	}
});

module.exports = router;