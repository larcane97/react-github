import styled from "styled-components";

export const StyledInput = styled.input`
  height: 34px;
  padding: 0 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075); /* x축 y축 blur*/
  font-size: 16px;

  &:focus {
    border-color: #51a7e8;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075),
      0 0 5px rgba(81, 167, 232, 0.5);
  }

  &::-webkit-input-placeholder {
    color: #cacaca;
  }
  &::-ms-input-placeholder {
    color: #cacaca;
  }
  &::-moz-input-placeholder {
    color: #cacaca;
  }
`;

// function Input({ placeholder }) {
//   return <StyledInput type="text" placeholder={placeholder} />;
// }

// export default Input;
