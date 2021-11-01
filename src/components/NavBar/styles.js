import styled from 'styled-components';

import {
  // TABLET,
  // DESCTOP,
  PRIMARY_COLOR,
  // TABLET,
  WHITE_COLOR,
} from '../../constants/styles';

export const Root = styled.nav`
  width: 250px;
  background-color: ${WHITE_COLOR};
  border-right: 2px solid ${PRIMARY_COLOR};
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style:none;
  padding: 0;
  margin: 0;
  
  &:last-child{
    border-bottom: 1px solid ${PRIMARY_COLOR}
  }
`

export const Item = styled.li`
  
`

export const HeadItem = styled.li`
  padding: 10px;
  font-weight:bold;
  background-color: ${PRIMARY_COLOR};
  color: ${WHITE_COLOR};
  margin-bottom: 10px;
  height: 43px;
`

export const Button = styled.button`
  background-color: transparent;
  border:none;
  border-top: 1px solid ${PRIMARY_COLOR};
  background-color: ${WHITE_COLOR};
  padding: 15px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  font-size: 16px;

  &:hover{
    background-color: ${PRIMARY_COLOR};
    color: ${WHITE_COLOR}
  }
  
`
