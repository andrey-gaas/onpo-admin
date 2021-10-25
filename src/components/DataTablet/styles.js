import styled from 'styled-components';

import {
  // TABLET,
  // DESCTOP,
  // PRIMARY_COLOR,
  // TABLET,
  // WHITE_COLOR,
  BLACK_COLOR
} from '../../constants/styles';

export const Root = styled.div`
  flex-shrink: 1;
  background-color: #eeeeee;
  flex-grow: 0;
  width: calc(100% - 10px);
  display: flex;
  flex-wrap:wrap;
  border: 1px solid ${BLACK_COLOR};
  margin: 5px;
`



export const TRow = styled.div`
  width: 100%;
  border-bottom: 1px solid ${BLACK_COLOR};
  display: flex;
  
  &:last-child{
    border-bottom: none;
  }
`

export const TCol = styled.div`
  border-right: 1px solid ${BLACK_COLOR};
  padding: 5px;
  display: flex;
  align-items:center;
  justify-content:center;

  width: ${props => props.width ? props.width : 5 }%;

  &:last-child{
    border-right: none;
  }
`
