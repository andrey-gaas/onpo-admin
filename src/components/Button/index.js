import React from 'react';
import PropTypes from 'prop-types';
import { Root } from './styled';

function Button({ children, ...props }) {
  return (
    <Root {...props}>
      {children}
    </Root>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  type: 'normal',
  fullWidth: false,
};

export default Button;
