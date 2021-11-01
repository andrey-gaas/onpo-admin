import styled from 'styled-components';
import { FS_MD, PRIMARY_COLOR } from '../../constants/styles';

export default styled.textarea`
  padding: 5px 10px;
  width: 100%;
  font-size: ${FS_MD};
  border: 1px solid #ddd;
  border-radius: 3px;
  outline: none;
  resize: vertical;

  :focus {
    border-color: ${PRIMARY_COLOR};
  }
`;