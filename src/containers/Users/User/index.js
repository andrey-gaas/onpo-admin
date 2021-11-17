import React from 'react';
import PropTypes from 'prop-types';
import {
  Root, AvatarContainer, Avatar,
  Name, InfoContainer, Email, Right,
  Position,
} from './styles';

function User({ data }) {
  const { user } = data;
  const img = data.img || '/images/avatars/no-avatar.png';
  const right = data.right === 'admin' ? 'Администратор' : 'Пользователь';

  return (
    <Root>
      <AvatarContainer>
        <Avatar image={img} />
        <Right>{right}</Right>
      </AvatarContainer>
      <InfoContainer>
        <Name>{user.surname} {user.name} {user.patronymic}</Name>
        <Email>{user.email}</Email>
        <Position>{user.placeofwork}, {user.position}</Position>
      </InfoContainer>
    </Root>
  );
}

User.propTypes = {
  data: PropTypes.object.isRequired,
};

export default User;
