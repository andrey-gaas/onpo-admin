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
    users:[{ key:"id", text:"ID", setting:{ width:5 }}, { key:"name", text:"Имя"}],
  }

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
          content={[{id:1,name:'Нуждин А. И.'},{id:2,name:'Гаас А. А.'},{id:3,name:'Сергеев А. А.'}]}
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