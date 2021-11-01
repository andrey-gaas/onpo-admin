import React from 'react';
import PropTypes from 'prop-types';
import { Select, Input, TextArea, Button } from '../../../components';
import { Root, Title, Container } from './styles';

function Form({ close, courses }) {
  return (
    <Root>
      <Title>Курс:</Title>
      <Container>
        <Select
          placeholder="Выберите курс"
          onChange={data => console.log(data)}
          data={courses}
        />
      </Container>

      <Title>
        Пользователь:
      </Title>
      <Container>
        <Input placeholder="Имя (Формат: Фамилия И О)" />
      </Container>
      <Container>
        <Input placeholder="Город / Место работы / Должность" />
      </Container>
      <Container>
        <TextArea placeholder="Отзыв" />
      </Container>
      <Container justify="space-between">
        <Button size="small" type="primary">Создать</Button>
        <Button size="small" onClick={close}>Отмена</Button>
      </Container>
    </Root>
  );
}

Form.propTypes = {
  close:   PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};

export default Form;
