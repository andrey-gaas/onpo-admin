import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { usersFetch } from '../../store/AC/users';
import {
  Root,
} from './styles';

function Users({ usersFetch, users }) {
  const { list, error } = users;

  console.log('list', list);
  console.log('error', error);

  useEffect(() => {
    usersFetch();
  }, [usersFetch]);

  return (
    <Root>
      123
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