import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { coursesFetch } from '../../store/AC/courses';
import { Button } from '../../components';
import Course from './Course';
import {
  Root,
  Text,
  Error,
  TopContainer,
  Grow,
  List,
} from './styles';

function Courses({ courses, coursesFetch }) {
  const { list, errors } = courses;
  
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    coursesFetch();
  }, [coursesFetch]);

  return (
    <Root>
      {
        list === null && !errors.list &&
        <Text>Загрузка...</Text>
      }

      {
        errors.list &&
        <Error>Ошибка загрузки списка курсов</Error>
      }

      {
        list && list.lingth === 0 &&
        <Text>Список курсов пуст</Text>
      }

      {
        list && list.length &&
          <Fragment>
            <TopContainer>
              <Grow />
              <Button onClick={() => setOpen(true)}>
                Добавить курс
              </Button>
            </TopContainer>
            <List>
              {list.map(item => <Course key={item.id} />)}
            </List>
          </Fragment>
        /* <Container>
          <TopContainer>
            <Grow />
            <Button onClick={() => setOpen(true)}>
              Создать комментарий
            </Button>
          </TopContainer>
          {
            isOpen &&
            <Modal
              title="Создание отзыва"
              close={() => setOpen(false)}
            >
              <Form close={() => setOpen(false)} courses={courses.list} />
            </Modal>
          }
          <List>
            {list.map(item => <Review key={item.id} {...item} error={error[item.id]} remove={() => reviewsRemove(item.id)} />)}
          </List>
        </Container> */
      }
    </Root>
  );
}

Courses.propTypes = {
  courses:      PropTypes.object.isRequired,
  coursesFetch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ courses }) => ({
  courses,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  coursesFetch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
