import Raect, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Shadow, Container, TitleContainer,
  Title, CloseButton, Content, Controls,
} from './styles';

function Modal({ children, title, close }) {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
  }, []);

  const handleClose = () => {
    document.body.style.overflowY = 'auto';
    close();
  }

  return (
    <Shadow>
      <Container>
        <CloseButton onClick={handleClose}>X</CloseButton>
        {
          title &&
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
        }
        <Content>
          {children}
        </Content>
      </Container>
    </Shadow>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  close: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: null,
};

Modal.Controls = Controls;

export default Modal;
