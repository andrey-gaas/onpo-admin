import React from 'react';
import { Item, HeadItem, Root, List, Button } from './styles';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Root>
      <List>
        <HeadItem>
            Меню
        </HeadItem>
        <Item>
          <Link to='/admin/courses'>
            <Button>
              Курсы
            </Button>
          </Link>
        </Item>
        <Item>
          <Link to='/admin/teachers'>
            <Button>
              Преподаватели
            </Button>
          </Link>
        </Item>
        <Item>
          <Link to='/admin/users'>
            <Button>
              Пользователи
            </Button>
          </Link>
        </Item>
        <Item>
          <Link to='/admin/reviews'>
            <Button>
              Отзывы
            </Button>
          </Link>
        </Item>
      </List>
    </Root>
  );
}

export default NavBar;
