import styled from 'styled-components';
import { FS_LGM, BLACK_COLOR, PRIMARY_COLOR } from '../../constants/styles';

export const Root = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;;
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

export const List = styled.div`
  margin: 20px auto;
  width: 1200px;
`;
