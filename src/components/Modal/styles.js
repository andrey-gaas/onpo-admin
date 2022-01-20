import styled from 'styled-components';
import { BR_MD, FS_MD, FS_LG, WHITE_COLOR, BLACK_COLOR } from '../../constants/styles';

export const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .3);
`;

export const Container = styled.div`
  position: absolute;
  min-width: 800px;
  background-color: ${WHITE_COLOR};
  border-radius: ${BR_MD};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: ${FS_MD};
  border: none;
  background-color: transparent;
`;

export const TitleContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${FS_LG};
  color: ${BLACK_COLOR};
`;

export const Content = styled.div`
  max-height: 80vh;
  overflow-y: scroll;
  padding: 20px;
`;

export const Controls = styled.div`
  padding: 20px;
  border-top: 1px solid #ccc;
`;
