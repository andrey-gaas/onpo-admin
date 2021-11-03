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

export const Block = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ClosedContent = styled.div`
  display: flex;
`;

export const OpenedContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  min-width: 600px;
`;

export const OpenedBlock = styled(Block)`
  margin-top: 10px;
  white-space: normal;
  overflow: auto;
`;

export const Title = styled.h5`
  margin: 0;
  margin-top: 20px;
  font-size: ${FS_LGS};

  :first-child {
    margin-top: 0;
  }
`;

export const SubTitle = styled.h6`
  margin: 0;
  margin-top: 10px;
  font-size: ${FS_MD};
`;

export const Number = styled(Block)`
  width: 60px;
`;

export const User = styled(Block)`
  width: 200px;
`;

export const Course = styled(Block)`
  width: 650px;
`;

export const ButtonsContainer = styled(Block)`
  margin-left: auto;
  margin-top: 0;
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

export const Input = styled(InputPrototype)`
  margin-top: 10px;
`;

export const TextArea = styled(TextAreaPrototype)`
  margin-top: 10px;
`;

export const EditingButtons = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Error = styled.h6`
  margin: 10px 0;
  font-size: ${FS_MD};
  color: ${PRIMARY_COLOR};
`;

export const ModalText = styled.p`
  margin: 0;
  font-size: ${FS_MD};
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
