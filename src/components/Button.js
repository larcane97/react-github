import React from "react";
import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

const buttonBackground = css`
  ${({ primary }) => {
    const selected_color = primary ? "#55a532" : "#eee";
    return css`
      background: ${selected_color}
        linear-gradient(
          to bottom,
          ${lighten(0.1, selected_color)},
          ${selected_color}
        );
      &:hover {
        background: ${darken(0.1, selected_color)};
      }
      &:active {
        background: ${lighten(0.1, selected_color)};
      }
    `;
  }}
`;

const buttonColor = css`
  ${({ primary }) => {
    const color = primary ? "white" : "black";
    return `color : ${color}`;
  }}
`;

const StyledButton = styled.div`
  display: inline-flex;
  height: 34px;
  border: 1px solid $d5d5d5;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 0px 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  ${buttonBackground};
  ${buttonColor};
`;

// #55a532"
function Button({ className, text, primary = false }) {
  return (
    <StyledButton type="submit" className={className} primary={primary}>
      {text}
    </StyledButton>
  );
}

export default Button;
