import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reviewsFetch } from '../../store/AC/reviews';
import { Root, Text, Error, List } from './styles';
import Review from './review';

function Reviews({ reviewsFetch, reviews }) {
  const { list, error } = reviews;
  console.log(list);


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
        <List>
          {list.map(item => <Review key={item.id} {...item} error={error[item.id]} />)}
        </List>
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
