import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Root, Placeholder, List, Item,
} from './styles';

function SelectMultiple({ placeholder, data, onChange }) {
  const [selected, setSelected] = useState([]);
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
  }

  function handleSelect(teacherId) {
    const selectedItem = selected.find(item => item === teacherId);

    if (selectedItem !== undefined) {
      setSelected(selected.filter(item => item !== teacherId));
      onChange(selected.filter(item => item !== teacherId));
      return;
    }

    setSelected([...selected, teacherId]);
    onChange([...selected, teacherId]);
  }

  function isSelected(id) {
    const x = selected.find(selectedItem => selectedItem === id);
    return x !== undefined;
  }

  return (
    <Root onClick={handleClick} focus={isOpen}>
      {
        placeholder && !selected.length &&
        <Placeholder>{placeholder}</Placeholder>
      }
      {
        selected.length !== 0 &&
          <Placeholder>Выбрано: {selected.length}</Placeholder>
      }
      {
        isOpen &&
        <List>
          {
            data.map((item, i) => (
              <Item
                key={i}
                onClick={() => handleSelect(item.id)}
                selected={!!isSelected(item.id)}
              >
                {item.title}
              </Item>
            ))
          }
        </List>
      }
    </Root>
  );
}

SelectMultiple.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectMultiple.defaultProps = {
  placeholder: '',
};

export default SelectMultiple;