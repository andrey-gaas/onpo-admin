import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { courseAddFetch, courseAddStatus } from '../../../store/AC/courses';
import { Select, Input, SelectMultiple, TextArea, Button } from '../../../components';
import { Root, Title, Container } from './styles';

function Form({ close, courseAddFetch, status, courseAddStatus, teachers }) {
  const [state, setState] = useState({
    title: '',
    teachers: [],
    file: '',
    description: '',
    stars: '',
    type: '',
    categories: [],
    start: '',
    hours: '',
    period: '',
    price: '',
    image: '',
    form: '',
    module: [''],
    roadMap: [''],
    advantages: [''],
    reviews: [],
  });
  const [isDisable, setDisable] = useState(false);


  function handleSelectMultiple(teachers) {
    setState({
      ...state,
      teachers,
    })
  }

  function handleSelectType(value) {
    setState({
      ...state,
      type: value.title,
      categories: [value.category]
    });
  }

  function handleChange({ target }) {
    setState({
      ...state,
      [target.name]: target.value,
    });
  }

  function handleMultipleFields(field, index, text) {
    const fieldFromState = state[field];

    fieldFromState[index] = text;

    setState({
      ...state,
      [field]: [...fieldFromState],
    });
  };

  function addFieldMultiple(field) {
    const fieldFromState = state[field];

    fieldFromState.push('');

    setState({
      ...state,
      [field]: [...fieldFromState],
    });
  }

  const types = [
    {
      title: 'Профессиональная переподготовка',
      category: 'retraining',
    },
    {
      title: 'Повышение квалификации',
      category: 'training',
    },
  ];

  function save() {
    setDisable(true);

    if (
      !state.title ||
      !state.teachers.length ||
      !state.description ||
      !state.stars ||
      !state.type ||
      !state.categories.length ||
      !state.start ||
      !state.hours ||
      !state.period ||
      !state.price ||
      !state.image ||
      !state.form
    ) {
      setDisable(false);
      return false;
    }

    courseAddFetch(state);
    setDisable(false);
  }

  function handleClose() {
    document.body.style.overflowY = 'auto';
    close();
    courseAddStatus(null);
  }

  return (
    <Root>
      {
        !status &&
          <Fragment>
            <Title>Название</Title>
            <Container>
              <Input
                placeholder="Название курса"
                name="title"
                value={state.name}
                onChange={handleChange}
              />
            </Container>

            <Title>Преподаватели:</Title>
            <Container>
              <SelectMultiple
                placeholder="Выберите преподавателей"
                onChange={handleSelectMultiple}
                data={teachers}
              />
            </Container>

            <Title>Описание курса:</Title>
            <Container>
              <TextArea
                placeholder="Описание"
                name="description"
                value={state.description}
                onChange={handleChange}
              />
            </Container>

            <Title>Оценка курса:</Title>
            <Container>
              <Input
                placeholder="От 0 до 10"
                name="stars"
                value={state.stars}
                onChange={handleChange}
              />
            </Container>

            <Title>Тип курса:</Title>
            <Container>
              <Select
                placeholder="Выберите тип"
                onChange={handleSelectType}
                data={types}
              />
            </Container>

            <Title>Начало:</Title>
            <Container>
              <Input
                placeholder="Например: Ежемесячно; По мере набора групп"
                name="start"
                value={state.start}
                onChange={handleChange}
              />
            </Container>

            <Title>Количество часов:</Title>
            <Container>
              <Input
                placeholder="Например: 252 часа; 1 час"
                name="hours"
                value={state.hours}
                onChange={handleChange}
              />
            </Container>

            <Title>Длительность курса:</Title>
            <Container>
              <Input
                placeholder="Например: от 5 дней; от 3.5 месяцев"
                name="period"
                value={state.period}
                onChange={handleChange}
              />
            </Container>

            <Title>Цена:</Title>
            <Container>
              <Input
                placeholder="Цена числом, например: 5000; 3600"
                name="price"
                value={state.price}
                onChange={handleChange}
              />
            </Container>

            <Title>Картинка:</Title>
            <Container>
              <Input
                placeholder="название картинки от 0 до 15, с припиской .jpg (5.jpg)"
                name="image"
                value={state.image}
                onChange={handleChange}
              />
            </Container>

            <Title>Форма обучения:</Title>
            <Container>
              <Input
                placeholder="Укажите форму обучения"
                name="form"
                value={state.form}
                onChange={handleChange}
              />
            </Container>

            <Title>Темы программы:</Title>
              {
                state.module.map((text, i) => (
                  <Container key={i}>
                    <Input
                      placeholder="Тема"
                      onChange={({ target }) => handleMultipleFields('module', i, target.value)}
                      value={state.module[i]}
                    />
                  </Container>
                ))
              }
              <Button onClick={() => addFieldMultiple('module')}>Добавить</Button>

              <Title>Дорожная карта:</Title>
                {
                  state.roadMap.map((text, i) => (
                    <Container key={i}>
                      <Input
                        placeholder="Пункт дорожной карты"
                        onChange={({ target }) => handleMultipleFields('roadMap', i, target.value)}
                        value={state.roadMap[i]}
                      />
                    </Container>
                  ))
                }
                <Button onClick={() => addFieldMultiple('roadMap')}>Добавить</Button>

                <Title>Подход к образованию:</Title>
                  {
                    state.advantages.map((text, i) => (
                      <Container key={i}>
                        <Input
                          placeholder="Пункт подхода"
                          onChange={({ target }) => handleMultipleFields('advantages', i, target.value)}
                          value={state.advantages[i]}
                        />
                      </Container>
                    ))
                  }
                  <Button onClick={() => addFieldMultiple('advantages')}>Добавить</Button>
                  <Container justify="space-between">
                    <Button size="small" type="primary" onClick={save} disabled={isDisable}>Создать</Button>
                    <Button size="small" onClick={handleClose}>Отмена</Button>
                  </Container>
          </Fragment>
      }

      {
        status === 'success' &&
          <Fragment>
            <Title>Курс добавлен!</Title>
            <Container justify="space-between">
              <Button size="small" onClick={handleClose}>Закрыть</Button>
            </Container>
          </Fragment>
      }

      {
        status === 'fail' &&
          <Fragment>
            <Title>Ошибка создания курса</Title>
            <Container justify="space-between">
              <Button size="small" onClick={handleClose}>Закрыть</Button>
            </Container>
          </Fragment>
      }
    </Root>
  );
}

Form.propTypes = {
  close: PropTypes.func.isRequired,
  courseAddFetch:  PropTypes.func.isRequired,
  courseAddStatus: PropTypes.func.isRequired,
  status: PropTypes.string,
  teachers: PropTypes.array.isRequired,
};

const mapStateToProps = ({ courses }) => ({
  status: courses.status,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  courseAddFetch,
  courseAddStatus,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
