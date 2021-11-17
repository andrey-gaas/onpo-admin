import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { usersFetch } from '../../store/AC/users';
import {
  Root, Text, Error,
  Container, List,
} from './styles';
import User from './User';

function Users({ usersFetch, users }) {
  const { list, error } = users;

  useEffect(() => {
    usersFetch();
  }, [usersFetch]);

  return (
    <Root>
    {
      list === null && !error.list &&
      <Text>Загрузка...</Text>
    }

    {
      error.list &&
      <Error>{error.list}</Error>
    }

    {
      list && list.lingth === 0 &&
      <Text>Список пользователей пуст</Text>
    }

    {
      list && list.length &&
        <Container>
          <List>
            {
              list.map(item => <User key={item.id} data={item} />)
            }
          </List>
        </Container>
    }
      </Root>
  );
}

Users.propTypes = {
  usersFetch: PropTypes.func.isRequired,
  users:        PropTypes.object.isRequired,
};

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  usersFetch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);