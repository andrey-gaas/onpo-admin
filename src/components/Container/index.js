import React from 'react';
import { Root } from './styles';

function Container({ children }) {
  return (
    <Root>
      {children}
    </Root>
  );
}

export default Container;
