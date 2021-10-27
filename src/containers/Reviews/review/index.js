import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Root,
  Number,
  User,
  Course,
  ClosedContent,
  OpenedContent,
  OpenedBlock,
  ButtonsContainer,
  Button,
  Image,
  Title,
  SubTitle,
} from './styles';
import editSrc from '../../../images/edit.svg';
import removeSrc from '../../../images/remove.svg';

function Review({ id, user, course, text }) {
  const [ isOpen, setOpen ] = useState(false);

  return (
    <Root open={isOpen}>
      {
        isOpen &&
          <OpenedContent>
            <Title>Пользователь:</Title>
            <SubTitle>Имя</SubTitle>
            <OpenedBlock>{user.surname} {user.name}. {user.middlename}.</OpenedBlock>
            <SubTitle>Город</SubTitle>
            <OpenedBlock>{user.place}</OpenedBlock>
            <SubTitle>Должность</SubTitle>
            <OpenedBlock>{user.position}</OpenedBlock>

            <Title>Курс:</Title>
            <OpenedBlock>{course.title}</OpenedBlock>

            <Title>Текст:</Title>
            <OpenedBlock>{text}</OpenedBlock>
          </OpenedContent>
      }

      {
        !isOpen &&
          <ClosedContent>
            <Number>№ {id + 1}</Number>
            <User>{user.surname} {user.name}. {user.middlename}.</User>
            <Course>{course.title}</Course>
          </ClosedContent>
      }
      <ButtonsContainer>
        <Button white onClick={() => setOpen(!isOpen)}>
          {isOpen ? 'Свернуть' : 'Подробнее'}
        </Button>
        <Button>
          <Image src={editSrc} alt="" />
        </Button>
        <Button>
          <Image src={removeSrc} alt="" />
        </Button>
      </ButtonsContainer>
    </Root>
  );
}

Review.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default Review;