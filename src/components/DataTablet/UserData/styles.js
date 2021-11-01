import styled from 'styled-components';

import {
  // TABLET,
  // DESCTOP,
  // PRIMARY_COLOR,
  //GRAY_COLOR,
  // TABLET,
  WHITE_COLOR,
  //BLACK_COLOR
} from '../../../constants/styles';

export const Root = styled.div`
  width: 100%;
  display: flex;
  background-color: ${WHITE_COLOR};
  &:last-child{
    border-bottom: none;
  }
`