import styled from 'styled-components';

import {
  // TABLET,
  // DESCTOP,
  // PRIMARY_COLOR,
  GRAY_COLOR,
  // TABLET,
  WHITE_COLOR,
  //BLACK_COLOR
} from '../../../constants/styles';

export const Root = styled.div`
  width: 100%;
  border-bottom: 1px solid ${GRAY_COLOR};
  display: flex;
  flex-wrap:wrap;
  &:last-child{
    border-bottom: none;
  }
`
export const TCol = styled.div`
  border-right: 1px solid ${GRAY_COLOR};
  padding: 5px;
  display: flex;
  align-items:center;
  background-color: ${WHITE_COLOR};
  width: ${props => props.width ? props.width : 5 }%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

  &.width_norm{
    width: 130px;
    flex-grow: unset;
    margin: 5px;
    margin-left: 10px;
  }
`

export const Image = styled.img`

`

export const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content:flex-end;
  background-color: ${WHITE_COLOR};
`