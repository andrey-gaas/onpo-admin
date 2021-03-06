import styled from 'styled-components';
import {
  TABLET,
  FS_XSM,
  FS_SM,
  FS_MD,
  BLACK_COLOR,
  PRIMARY_COLOR,
  BR_SM,
} from '../../constants/styles';

export const Root = styled.button`
  padding: ${props => props.size === 'small' ? '12px 15px' : '16px 32px'};
  width: ${props => props.fullWidth && '100%'};
  font-family: 'Gotham';
  font-size: ${props => props.size === 'small' ? FS_XSM : FS_SM};
  font-weight: bold;
  text-decoration: none !important;
  color: ${props => props.type === 'primary' ? '#fff' : BLACK_COLOR};
  background-color: ${props => props.type === 'primary' ? PRIMARY_COLOR : '#fff'};
  border: 1px solid ${PRIMARY_COLOR};
  border-radius: ${BR_SM};
  cursor:pointer;
  transition:all .2s;

  &:hover {
    color: #fff;
    background-color: ${PRIMARY_COLOR};
  }

  @media ${TABLET} {
    font-size: ${props => props.size === 'small' ? FS_SM : FS_MD};
  }
`;