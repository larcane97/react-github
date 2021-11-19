import React from "react";
import styled, { css } from "styled-components";
import visualBackground from "../img/bg.jpg";
import Button from "./Button";
import { StyledInput } from "./Input";
import { Link } from "react-router-dom";

const VisualInner = styled.div`
  background: url(${visualBackground});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: cover;

  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  & .inner {
    padding: 160px 0;
    display: flex;
  }
`;

const StyledVisualLeft = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 90px;
  & .summary__title {
    font-size: 54px;
    font-weight: 300;
    color: #fff;
    line-height: 1.25;
    margin-bottom: 18px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 1px 25px rgba(0, 0, 0, 0.75);
  }

  & .summary__description {
    font-size: 26px;
    font-weight: 300;
    color: #fff;
    line-height: 1.5;
  }
`;

function VisualLeft() {
  return (
    <StyledVisualLeft>
      <div className="summary__title">How&nbsp;people build&nbsp;software</div>
      <div className="summary__description">
        Millions of developers use GitHub to build personal projects, support
        their businesses, and&nbsp;work together on open source technologies.
      </div>
    </StyledVisualLeft>
  );
}

const StyledVisualRight = styled.div`
  width: 340px;
  margin-top: 15px;
  #sign-form {
    width: 100%;

    & [type="submit"] {
      width: 100%;
      height: 62px;
      padding: 0 25px;
      font-size: 20px;
    }

    & li {
      margin-bottom: 17px;

      & .input--text {
        width: 100%;
      }
    }
    & li::last-child {
      margin-bottom: 0;
    }

    & .caption {
      font-size: 12px;
      margin-top: 5px;
      color: rgba(255, 255, 255, 0.6);
      line-height: 1.5;
      text-align: center;
    }
  }
`;

function VisualRight() {
  return (
    <StyledVisualRight>
      <form id="sign-form" action="" moethod="POST">
        <ul>
          <li>
            <StyledInput
              className="input--text"
              type="text"
              placeholder="Pick a username"
            />
          </li>
          <li>
            <StyledInput
              className="input--text"
              type="email"
              placeholder="Your email address"
            />
          </li>
          <li>
            <StyledInput
              className="input--text"
              type="password"
              placeholder="Create a password"
            />
            <p className="caption">
              Use at least one letter, one numeral, and seven characters.
            </p>
          </li>
          <li>
            <Link to="/sign-up">
              <Button text="Sign up for Github" primary />
            </Link>
            <p className="caption">
              By clicking "Sign up for GitHub", you agree to our terms of
              service and privacy policy. We'll occasionally send you account
              related emails.
            </p>
          </li>
        </ul>
      </form>
    </StyledVisualRight>
  );
}

function VisualSection() {
  return (
    <VisualInner>
      <div className="inner">
        <VisualLeft />
        <VisualRight />
      </div>
    </VisualInner>
  );
}

export default VisualSection;
