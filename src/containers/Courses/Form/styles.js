import styled from 'styled-components';
import { FS_MD, BLACK_COLOR } from '../../../constants/styles';

export const Root = styled.div`

`;

export const Title = styled.h3`
  margin: 0;
  margin-top: 20px;
  font-size: ${FS_MD};
  color: ${BLACK_COLOR};

  :first-child {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'flex-start'};
  margin-top: 15px;
`;
