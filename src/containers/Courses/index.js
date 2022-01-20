import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { coursesFetch, courseRemove } from '../../store/AC/courses';
import { teachersFetch } from '../../store/AC/teachers';
import { Modal, Button } from '../../components';
import Course from './Course';
import Form from './Form';
import {
  Root,
  Text,
  Error,
  TopContainer,
  Grow,
  List,
} from './styles';

function Courses({ courses, coursesFetch, courseRemove, teachersFetch, teachers }) {
  const { list, errors } = courses;
  
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    coursesFetch();
    teachersFetch();
  }, [coursesFetch, teachersFetch]);

  return (
    <Root>
      {
        list === null && !errors.list &&
        <Text>Загрузка...</Text>
      }

      {
        errors.list &&
        <Error>Ошибка загрузки списка курсов</Error>
      }

      {
        list && list.lingth === 0 &&
        <Text>Список курсов пуст</Text>
      }

      {
        list && list.length &&
          <Fragment>
            <TopContainer>
              <Grow />
              <Button onClick={() => setOpen(true)}>
                Добавить курс
              </Button>
            </TopContainer>
            <List>
              {list.map(item => <Course key={item.id} course={item} remove={() => courseRemove(item.id)} error={errors[item.id]} />)}
            </List>
            {
              isOpen &&
              <Modal
                title="Создание курса"
                close={() => setOpen(false)}
              >
                <Form
                  teachers={teachers.list.map(item => ({ id: item.id, title: `${item.surname} ${item.name} ${item.middlename}` }))}
                  close={() => setOpen(false)}
                />
              </Modal>
            }
          </Fragment>
      }
    </Root>
  );
}

Courses.propTypes = {
  courses:      PropTypes.object.isRequired,
  teachers:     PropTypes.object.isRequired,
  coursesFetch: PropTypes.func.isRequired,
  courseRemove: PropTypes.func.isRequired,
  teachersFetch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ courses, teachers }) => ({
  courses,
  teachers,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  coursesFetch,
  courseRemove,
  teachersFetch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
