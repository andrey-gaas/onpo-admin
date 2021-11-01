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
  size: PropTypes.string,
};

Button.defaultProps = {
  type: 'normal',
  fullWidth: false,
  size: 'small',
};

export default Button;
