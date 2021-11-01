import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from '../../components';
import { reviewsFetch } from '../../store/AC/reviews';
import {
  Root, Text, Error, Container, List,
  TopContainer, Grow,
} from './styles';
import Review from './review';

function Reviews({ reviewsFetch, reviews }) {
  const { list, error } = reviews;
  
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    reviewsFetch();
  }, [reviewsFetch]);

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
              <p>HELLO WORLD</p>
            </Modal>
          }
          <List>
            {list.map(item => <Review key={item.id} {...item} error={error[item.id]} />)}
          </List>
        </Container>
      }
    </Root>
  );
}

Reviews.propTypes = {
  reviewsFetch: PropTypes.func.isRequired,
  reviews:      PropTypes.object.isRequired,
};

const mapStateToProps = ({ reviews }) => ({
  reviews,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  reviewsFetch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
