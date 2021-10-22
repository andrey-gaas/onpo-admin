import styled from 'styled-components';
import {
  TABLET,
  LAPTOP,
  DESCTOP,
  FS_MD,
  FS_LGS,
  FS_LG,
  BLACK_COLOR,
} from '../../constants/styles';

export const Root = styled.header`
  padding: 20px 0px;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;

  @media ${TABLET} {
    height: 60px;
    width: 60px;
  }
`;

export const Title = styled.h2`
  display: none;
  margin-left: 20px;
  font-size: ${FS_MD};
  text-transform: uppercase;
  color: ${BLACK_COLOR};

  @media ${TABLET} {
    display: block;
  }

  @media ${LAPTOP} {
    margin-left: 40px;
    font-size: ${FS_LGS};
  }

  @media ${DESCTOP} {
    margin-left: 80px;
    font-size: ${FS_LG};
  }
`;

export const Grow = styled.div`
  flex-grow: 1;
`;
