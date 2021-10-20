import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import { Root, Wrapper, Logo, Title } from './styles';
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
        </Wrapper>
      </Container>
    </Root>
  );
}

export default Header;
