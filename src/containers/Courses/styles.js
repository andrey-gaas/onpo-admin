import styled from 'styled-components';
import { FS_LGM, BLACK_COLOR, PRIMARY_COLOR } from '../../constants/styles';

export const Root = styled.div`
  margin: 20px auto;
  max-width: 1000px;
`;

export const Text = styled.div`
  margin-top: 50px;
  align-self: center;
  font-size: ${FS_LGM};
  color: ${BLACK_COLOR};
`;

export const Error = styled.div`
  margin-top: 50px;
  align-self: center;
  font-size: ${FS_LGM};
  color: ${PRIMARY_COLOR};
`;

export const TopContainer = styled.div`
  display: flex;
`;

export const Grow = styled.div`
  flex-grow: 1;
`;

export const List = styled.div`
  margin-top: 20px;
`;
