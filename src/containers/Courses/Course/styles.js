import styled from 'styled-components';
import {
  Input as InputPrototype,
  TextArea as TextAreaPrototype,
} from '../../../components';
import { GRAY_COLOR, WHITE_COLOR, FS_MD, FS_LGS, PRIMARY_COLOR, BLACK_COLOR } from '../../../constants/styles';

export const Root = styled.div`
  display: flex;
  align-items: ${props => props.open ? 'flex-start' : 'center'};
  padding: 10px 20px;
  font-size: ${FS_MD};
  background-color: ${WHITE_COLOR};
  border: 1px solid ${GRAY_COLOR};
  border-bottom: none;
  border-radius: 3px;
`;

export const Title = styled.h2`
  margin-right: 5px;
  font-size: ${FS_MD};
  color: ${BLACK_COLOR};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: auto;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  padding: 10px;
  color: ${props => props.white ? BLACK_COLOR : WHITE_COLOR};
  background-color: ${props => props.white ? WHITE_COLOR : PRIMARY_COLOR};
  border: ${props => props.white ? '1px solid #ddd' : 'none'};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
`;

export const Image = styled.img`
  fill: ${WHITE_COLOR};
  height: 20px;
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
