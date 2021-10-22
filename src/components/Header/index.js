import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../';
import { Root, Wrapper, Logo, Title, Grow } from './styles';
import logoSrc from '../../images/logo.svg';

function Header() {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Link to="/">
            <Logo src={logoSrc} alt="" />
          </Link>
          <Title>Личный кабинет</Title>
          <Grow />
          <Button>Выход</Button>
        </Wrapper>
      </Container>
    </Root>
  );
}

export default Header;
