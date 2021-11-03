const { Router } = require('express');
const ReviewsApi = require('../services/Reviews');
const CoursesApi = require('../services/Courses');

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
		const reviewId = await ReviewsApi.add(review);
		const newReview = await ReviewsApi.getOne(reviewId);
		res.send(newReview);

		// Добавляем отзыв в курс
		const course = await CoursesApi.getOne(review.course.id);
		await CoursesApi.update(review.course.id, { reviews: [...course.reviews, newReview.id] })

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
		const result = await ReviewsApi.update(id, changes);

		res.send(result.value);
	} catch(error) {
		console.log('Ошибка в PUT /api/reviews/:id');
		res.status(500).send('Ошибка при редактировании комментария. Обновите страницу и попробуйте еще раз.');
	}
});

router.delete('/:id', async (req, res) => {
	const id = +req.params.id;

	try {
		const removedReview = await ReviewsApi.remove(id);
		res.send('OK');

		// Удаляем отзыв из курса
		const course = await CoursesApi.getOne(removedReview.course.id);
		await CoursesApi.update(course.id, {
			reviews: course.reviews.filter(item => item !== removedReview.id),
		});
	} catch(error) {
		console.log('Ошибка в DELETE /api/reviews/:id');
		res.status(500).send('Ошибка при удалении комментария.');
	}
});

module.exports = router;