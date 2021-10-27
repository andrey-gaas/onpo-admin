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
  Input,
  TextArea,
  EditingButtons,
} from './styles';
import editSrc from '../../../images/edit.svg';
import removeSrc from '../../../images/remove.svg';

function Review({ id, user, course, text }) {
  const [ isOpen, setOpen ] = useState(false);
  const [ isEditing, setEditing ] = useState(false);
  const [ changes, setChanges ] = useState({
    name: `${user.surname} ${user.name} ${user.middlename}`,
    place: user.place,
    position: user.position,
    title: course.title,
    text: text,
  });

  const editing = () => {
    setEditing(!isEditing);

    if (!isOpen) {
      setOpen(true);
    }
  }

  const handleChange = ({ target }) => {
    setChanges({ ...changes, [target.name]: target.value });
  };

  const cancel = () => {
    setChanges({
      name: `${user.surname} ${user.name} ${user.middlename}`,
      place: user.place,
      position: user.position,
      title: course.title,
      text: text,
    });
    setEditing(false);
  };

  return (
    <Root open={isOpen}>
      {
        isOpen &&
          <OpenedContent>
            <Title>Пользователь:</Title>
            <SubTitle>Имя</SubTitle>
            {
              isEditing ?
                <Input
                  name="name"
                  value={changes.name}
                  onChange={handleChange}
                />
                : <OpenedBlock>{user.surname} {user.name}. {user.middlename}.</OpenedBlock>
            }

            <SubTitle>Город</SubTitle>
            {
              isEditing ?
                <Input
                  name="place"
                  value={changes.place}
                  onChange={handleChange}
                />
                : <OpenedBlock>{user.place}</OpenedBlock>
            }

            <SubTitle>Должность</SubTitle>
            {
              isEditing ?
                <Input
                  name="position"
                  value={changes.position}
                  onChange={handleChange}
                />
                : <OpenedBlock>{user.position}</OpenedBlock>
            }
            
            <Title>Курс:</Title>
            {
              isEditing ?
                <Input
                  name="title"
                  value={changes.title}
                  onChange={handleChange}
                />
                : <OpenedBlock>{course.title}</OpenedBlock>
            }

            <Title>Текст:</Title>
            {
              isEditing ?
                <TextArea
                  rows={5}
                  name="text"
                  value={changes.text}
                  onChange={handleChange}
                />
                : <OpenedBlock>{text}</OpenedBlock>
            }

            {
              isEditing &&
                <EditingButtons>
                  <Button>Сохранить</Button>
                  <Button white onClick={cancel}>Отмена</Button>
                </EditingButtons>
            }
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
        <Button onClick={editing}>
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