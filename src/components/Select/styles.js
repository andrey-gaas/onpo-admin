import styled from 'styled-components';
import { FS_MD, PRIMARY_COLOR, BLACK_COLOR, WHITE_COLOR, FS_SM } from '../../constants/styles';

export const Root = styled.div`
  position: relative;
  padding: 10px;
  width: 100%;
  font-size: ${FS_MD};
  border: 1px solid ${props => props.focus ? PRIMARY_COLOR : '#ddd'};
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  :after {
    content: ''; 
    position: absolute;
    right: 10px;
    top: ${props => props.focus ? '7px' : '15px'};
    border: 8px solid transparent;
    border-top-color: ${props => !props.focus && BLACK_COLOR };
    border-bottom-color: ${props => props.focus && PRIMARY_COLOR };
   }
`;

export const Placeholder = styled.div`
  color: #777;
  user-select: none;
`;

export const Selected = styled(Placeholder)`
  color ${BLACK_COLOR};
`;

export const List = styled.div`
  position: absolute;
  top: 39px;
  left: 0;
  right: 0;
  background-color: ${WHITE_COLOR};
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 5px;
`;

export const Item = styled.div`
  padding: 10px 15px;
  font-size: ${FS_SM};
  color: ${BLACK_COLOR};
  border-top: 1px solid #ddd;
  user-select: none;

  :first-child {
    border-top: none;
  }

  :hover {
    background-color: ${PRIMARY_COLOR};
    color: ${WHITE_COLOR};
  }
`;
