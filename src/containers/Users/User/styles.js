import styled from 'styled-components';
import { BR_MD, FS_MD, FS_LG, WHITE_COLOR, BLACK_COLOR, GRAY_COLOR, FS_SM } from '../../../constants/styles';

export const Root = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 20px;
  background-color: ${WHITE_COLOR};
  font-size: ${FS_MD};
  border-radius: ${BR_MD};

  :first-child {
    margin-top: 0;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

export const Right = styled.span`
  margin-top: 10px;
  font-size: ${FS_SM};
  color: ${GRAY_COLOR};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 20px;
`;

export const Name = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: ${FS_LG};
  color: ${BLACK_COLOR};
`;

export const Email = styled.span`
  margin-top: 10px;
  color: ${GRAY_COLOR};
  font-size: ${FS_MD};
`;

export const Position = styled.span`
  margin-top: 20px;
  font-size: ${FS_MD};
  color: ${BLACK_COLOR};
`;
