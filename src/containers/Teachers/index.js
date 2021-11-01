import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reviewsFetch } from '../../store/AC/reviews';
import { Root, Text, Error } from './styles';
import { DataTablet } from '../../components';

function Reviews({ reviewsFetch, reviews }) {
  const { list, error } = reviews;
  console.log(list);
  const setting = {
    users:[ { key:"name", text:"ФИО", setting:{ width:17 }},
            { key:"course", text:"Название курса"}],
  }
  const content = !list ? null: list.map( el => (
    {...el, 
      name: `${el.user.surname} ${el.user.name}. ${el.user.middlename}.`,
      course: el.course.title
    }))

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
        <DataTablet 
          setting={setting.users} 
          content={content}
        />
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