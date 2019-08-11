import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;

  input {
    flex: 1;
    border: 1px solid ${props => (props.hasError ? '#ff7979' : '#eee')};
    border-radius: 4px;
    padding: 10px 15px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonSubmit = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background-color: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;

    & + li {
      border-top: 1px solid #eee;
    }
  }

  a {
    text-decoration: none;
    color: #7159c1;
  }
`;
