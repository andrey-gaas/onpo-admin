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
	}
});

router.get('/:id', async (req, res) => {
	const id = +req.params.id;

	try {
		const review = await ReviewsApi.getOne(id);

		res.send(review);
	} catch(error) {
		console.log('Ошибка в /api/reviews/:id');
	}
});

module.exports = router;