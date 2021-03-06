import styled from 'styled-components';

import {
  // TABLET,
  // DESCTOP,
  PRIMARY_COLOR,
  GRAY_COLOR,
  // TABLET,
  WHITE_COLOR,
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
  font-size: 16px;
  line-height: 2;
`
export const TColHead = styled.div`
  //border-right: 1px solid ${BLACK_COLOR};
  padding: 5px;
  display: flex;
  align-items:center;
  justify-content:center;
  background-color: ${PRIMARY_COLOR};
  color: ${WHITE_COLOR};
  width: ${props => props.width ? props.width : 5 }%;
  font-weight:bold;
  &:last-child{
    border-right: none;
  }
`
export const Row = styled.div`
  width: 100%;
  border-bottom: 1px solid ${GRAY_COLOR};
  display: flex;
  
  &:last-child{
    border-bottom: none;
  }
`

export const TCol = styled.div`
  border-right: 1px solid ${GRAY_COLOR};
  padding: 5px;
  display: flex;
  align-items:center;
  justify-content:center;
  background-color: ${WHITE_COLOR};
  width: ${props => props.width ? props.width : 5 }%;
  
  &:last-child{
    border-right: none;
  }
`

export const Btn = styled.button`
  background-color: transparent;
  border:none;
  flex-grow: 1;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,.1), inset 0 1px 2px rgba(0,0,0,.1);
  border: 1px solid rgba(168, 168, 168, .69);;
  font-weight:bold;
  height: 32px;
  &.red{
    background-color:#ea1313;
    color: ${WHITE_COLOR}
  }
  &.yellow{
    background-color:#fbee2e;
  }
`

export const Image = styled.img`

`