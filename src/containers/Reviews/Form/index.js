import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reviewsAddFetch, reviewsAddStatus } from '../../../store/AC/reviews';
import { Select, Input, TextArea, Button } from '../../../components';
import { Root, Title, Container } from './styles';

function Form({ close, courses, reviewsAddFetch, status, reviewsAddStatus }) {
  const [state, setState] = useState({
    course: null,
    name: '',
    position: '',
    text: '',
  });

  const [isDisable, setDisable] = useState(false);

  function handleSelect(course) {
    setState({
      ...state,
      course,
    })
  }

  function handleChange({ target }) {
    setState({
      ...state,
      [target.name]: target.value,
    });
  }

  function handleClose() {
    document.body.style.overflowY = 'auto';
    close();
    reviewsAddStatus(null);
  }

  function save() {
    setDisable(true);
    const { course, name, position, text } = state;
    if (!course || !name || !position || !text) {
      setDisable(false);
      return false;
    }
    const user = name.split(' ');

    const review = {
      course: {
        title: course.title,
        id: course.id,
        category: course.categories[0],
      },
      text,
      user: {
        id: -1,
        surname: user[0],
        name: user[1],
        middlename: user[2],
        img: '',
        position,
      },
      likes: [1, 2, 3, 4, 5],
      stars: 10,
      date: Date.now(),
    };

    reviewsAddFetch(review);
    setDisable(false);
  }

  return (
    <Root>
      {
        !status &&
          <Fragment>
            <Title>Курс:</Title>
            <Container>
              <Select
                placeholder="Выберите курс"
                onChange={handleSelect}
                data={courses}
              />
            </Container>
      
            <Title>
              Пользователь:
            </Title>
            <Container>
              <Input
                placeholder="Имя (Формат: Фамилия И О)"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
            </Container>
            <Container>
              <Input
                placeholder="Город / Место работы / Должность"
                name="position"
                value={state.position}
                onChange={handleChange}
              />
            </Container>
            <Container>
              <TextArea
                placeholder="Отзыв"
                name="text"
                value={state.text}
                onChange={handleChange}
              />
            </Container>
            <Container justify="space-between">
              <Button size="small" type="primary" onClick={save} disabled={isDisable}>Создать</Button>
              <Button size="small" onClick={handleClose}>Отмена</Button>
            </Container>
          </Fragment>
      }

      {
        status === 'success' &&
          <Fragment>
            <Title>Отзыв добавлен!</Title>
            <Container justify="space-between">
              <Button size="small" onClick={handleClose}>Закрыть</Button>
            </Container>
          </Fragment>
      }

      {
        status === 'fail' &&
          <Fragment>
            <Title>Ошибка создания отзыва</Title>
            <Container justify="space-between">
              <Button size="small" onClick={handleClose}>Закрыть</Button>
            </Container>
          </Fragment>
      }
    </Root>
  );
}

Form.propTypes = {
  close:            PropTypes.func.isRequired,
  courses:          PropTypes.array.isRequired,
  reviewsAddFetch:  PropTypes.func.isRequired,
  status:           PropTypes.string,
  reviewsAddStatus: PropTypes.func.isRequired,
};

const mapStateToProps = ({ reviews }) => ({
  status: reviews.status,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  reviewsAddFetch,
  reviewsAddStatus,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
