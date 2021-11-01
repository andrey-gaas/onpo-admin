import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Root, Placeholder, List, Item,
  Selected,
} from './styles';


function Select({ placeholder, data, onChange }) {
  const [selected, setSelected] = useState(null);
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
  }

  function handleSelect(i) {
    setSelected(data[i]);
    setOpen(false);
    onChange(data[i]);
  }

  return (
    <Root onClick={handleClick} focus={isOpen}>
      {
        placeholder && !selected &&
        <Placeholder>{placeholder}</Placeholder>
      }
      {
        selected &&
        <Selected>{selected.title}</Selected>
      }
      {
        isOpen &&
        <List>
          {
            data.map((item, i) => (
              <Item key={item.id} onClick={() => handleSelect(i)}>
                {item.title}
              </Item>
            ))
          }
        </List>
      }
    </Root>
  );
}

Select.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  placeholder: '',
};

export default Select;
