import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  min-height: 40px;
  padding: 8px 12px;
  border: 1px solid #CCC;
  border-radius: 0;
  font-size: 1rem;
  font-weight: 400;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  :focus {
    border-color: #66AFE9;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(102,175,233,0.6);
    outline: 0;
  }
`;

Input.defaultProps = {
  type: 'text',
};

export default Input;
