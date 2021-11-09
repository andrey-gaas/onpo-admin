const { Router } = require('express');
const PatronsApi = require('../services/Patrons');
const UsersApi = require('../services/Users');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await UsersApi.get();
    res.send(users);
  } catch(e) {
    console.log('Ошибка в /api/users/');
    console.log(e.message);
    res.status(500).send('Ошибка загрузки списка пользователей');
  }
});

router.get('/:card', async (req, res) => {
  try {
    const cardNumber = req.params.card;
    const user = await UsersApi.getOne({ libraryCardNumber: cardNumber});

    // Если пользователь найден, отправляем
    if (user) {
      const userData = await PatronsApi.getOne({ _id: user.user });
      
      user.user = userData;

      return res.send(user);
    }
    
    // Если не найден, ищем в основной базе
    // по номеру карты из query параметра
    if (cardNumber) {
      const user = await PatronsApi.getOne({ libraryCardNumber: cardNumber });

      if (!user) {  // Если такого пользователя не существует
        res.status(404).send('Пользователь не найден');
      } else {
        const newUserId = await UsersApi.add(user._id, cardNumber);
        const onpoUser = await UsersApi.getOne({ id: newUserId });
        const userData = await PatronsApi.getOne({ _id: onpoUser.user });

        onpoUser.user = userData;

        res.send(onpoUser);
      }

    } else {  // Если query параметра нет
      return res.status(400).send('Неправильный запрос');
    }
  } catch(e) {
    console.log('Ошибка в /api/users/:id');
    console.log(e.message);
    return res.status(500).send('Ошибка загрузки пользователя');
  }
});

router.put('/:id', async (req, res) => {
	const id = +req.params.id;
	const changes = req.body;

  console.log(changes);

	try {
		const result = await UsersApi.update(id, changes);

		res.send(result.value);
	} catch(error) {
		console.log('Ошибка в PUT /api/users/:id');
		res.status(500).send('Ошибка при редактировании пользователя.');
	}
});

router.delete('/:id', async (req, res) => {
	try {
    const id = +req.params.id;
		await UsersApi.remove(id);
		res.send('OK');
	} catch(error) {
		console.log('Ошибка в DELETE /api/users/:id');
		res.status(500).send('Ошибка при удалении пользователя.');
	}
});

module.exports = router;
