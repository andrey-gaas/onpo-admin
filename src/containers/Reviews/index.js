import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reviewsFetch } from '../../store/AC/reviews';
import { Root } from './styles';

function Reviews({ reviewsFetch }) {
  useEffect(() => {
    reviewsFetch();
  }, [reviewsFetch]);

  return (
    <Root>
      123
    </Root>
  );
}

Reviews.propTypes = {
  reviewsFetch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  reviewsFetch,
}, dispatch);

export default connect(null, mapDispatchToProps)(Reviews);
