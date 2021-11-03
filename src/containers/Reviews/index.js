import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from '../../components';
import { reviewsFetch, reviewsRemove } from '../../store/AC/reviews';
import { coursesFetch } from '../../store/AC/courses';
import {
  Root, Text, Error, Container, List,
  TopContainer, Grow,
} from './styles';
import Review from './review';
import Form from './Form';

function Reviews({ reviewsFetch, coursesFetch, reviews, courses, reviewsRemove }) {
  const { list, error } = reviews;
  
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    reviewsFetch();
    coursesFetch();
  }, [reviewsFetch, coursesFetch]);

  return (
    <Root>
      {
        list === null && !error.list &&
        <Text>Загрузка...</Text>
      }

      {
        error.list &&
        <Error>Ошибка загрузки списка отзывов</Error>
      }

      {
        list && list.lingth === 0 &&
        <Text>Список отзывов пуст</Text>
      }

      {
        list && list.length &&
        <Container>
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
        </Container>
      }
    </Root>
  );
}

Reviews.propTypes = {
  reviewsFetch:  PropTypes.func.isRequired,
  reviews:       PropTypes.object.isRequired,
  coursesFetch:  PropTypes.func.isRequired,
  courses:       PropTypes.object.isRequired,
  reviewsRemove: PropTypes.func.isRequired,
};

const mapStateToProps = ({ reviews, courses }) => ({
  reviews,
  courses,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  reviewsFetch,
  coursesFetch,
  reviewsRemove,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
