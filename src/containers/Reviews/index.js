import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reviewsFetch } from '../../store/AC/reviews';
import { Root, Loading, Error } from './styles';

function Reviews({ reviewsFetch, reviews }) {
  const { list, error } = reviews;

  useEffect(() => {
    reviewsFetch();
  }, [reviewsFetch]);

  return (
    <Root>
      {
        list === null &&
        error === null &&
        <Loading>Загрузка...</Loading>
      }

      {
        error !== null &&
        <Error>Ошибка загрузки списка отзывов</Error>
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
