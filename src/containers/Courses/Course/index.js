import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { courseEdit } from '../../../store/AC/courses';
import { Modal } from '../../../components';
import {
  Root, Title, ButtonsContainer, Button, Image, ModalButtonsContainer,
} from './styles';
import removeSrc from '../../../images/remove.svg';

function Course({ courseEdit, course, remove, error }) {
  const [ isOpenRemove, setOpenRemove ] = useState(false);

  return (
    <Root>
      <Title>
        {course.title}
      </Title>
      <ButtonsContainer>
        <Button onClick={() => setOpenRemove(true)}>
          <Image src={removeSrc} alt="" />
        </Button>
      </ButtonsContainer>

      {
        // REMOVE MADAL
        isOpenRemove &&
        <Modal
          title="Удаление курса"
          close={() => setOpenRemove(false)}
        >
          <p>Вы действительно хотите удалить этот курс?</p>
          <ModalButtonsContainer>
            <Button onClick={remove}>Удалить</Button>
            <Button white onClick={() => setOpenRemove(false)}>Отмена</Button>
          </ModalButtonsContainer>
        </Modal>
      }
    </Root>
  );
}

Course.propTypes = {
  course: PropTypes.object.isRequired,
  courseEdit:  PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Course.defaultProps = {
  error: null,
};

const mapStateToProps = dispatch => bindActionCreators({
  courseEdit,
}, dispatch);

export default connect(null, mapStateToProps)(Course);