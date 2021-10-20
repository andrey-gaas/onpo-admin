import styled from 'styled-components';
import { TABLET, LAPTOP, DESCTOP } from '../../constants/styles';

export const Root = styled.div`
  margin: 0 auto;
  width: 91.6%;

  @media ${TABLET} {
    width: 688px;
    min-width: 688px;
    max-width: 848px;
  }

  @media ${LAPTOP} {
    min-width: unset;
    max-width: unset;
    width: 1160px
  }

  @media ${DESCTOP} {
    width: 1440px;
  }
`;
