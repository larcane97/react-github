import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import logo from "../img/logo.svg";
import logo_on from "../img/logo_on.svg";
import Button from "./Button";
import Input, { StyledInput } from "./Input";

const StyledHeader = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.75);
  background: #fff;
`;

const StyledHeaderInner = styled.div`
  height: 78px;
`;

const StyledLeftHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & .main-menu {
    display: flex;

    li a {
      display: block;
      padding: 10px;
      color: #3c4146;
      &:hover {
        color: #4078c0;
      }
    }
  }

  & .logo {
    margin-right: 10px;
    & a {
      display: block;
      width: 32px;
      height: 32px;
      background: url(${logo});
      text-indent: -9999px;

      &:hover {
        background: url(${logo_on});
      }
    }
  }
`;

function LeftHeader() {
  return (
    <StyledLeftHeader className="float--left">
      <div className="logo">
        <Link to="/">GitHub</Link>
      </div>
      <ul className="main-menu">
        <li>
          <Link to="/personal">Personal</Link>
        </li>
        <li>
          <Link to="/open-source">Open source</Link>
        </li>
        <li>
          <Link to="/business">Business</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
      </ul>
    </StyledLeftHeader>
  );
}

const StyledRightHeader = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  & .btn-group {
    order: 3;

    & a {
      display: inline-block;
      margin-right: 8px;
    }
  }

  #search-form {
    order: 2;
    margin-right: 12px;
  }
  #search {
    width: 160px;
    font-size: 14px;

    & + [type="submit"] {
      display: none;
    }
  }

  & .sub-menu {
    order: 1;
    display: flex;
    margin-right: 10px;
    & a {
      display: block;
      padding: 8px;
      font-size: 13px;
      color: #3c4146;

      &:hover {
        color: #4078c0;
      }
    }
  }
`;

function RightHeader() {
  return (
    <StyledRightHeader className="float--right">
      <div className="btn-group">
        <Link to="sign-in">
          <Button text="Sign In" />
        </Link>
        <Link to="sign-up">
          <Button text="Sign up" primary fontsize="15px" />
        </Link>
      </div>
      <form id="search-form" method="POST" action="">
        <StyledInput id="search" placeholder="Search Github" />
        <input type="submit" value="Submit" />
      </form>
      <ul className="sub-menu">
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
      </ul>
    </StyledRightHeader>
  );
}

function Header() {
  return (
    <StyledHeader className="section">
      <StyledHeaderInner className="inner clearfix">
        <LeftHeader />
        <RightHeader />
      </StyledHeaderInner>
    </StyledHeader>
  );
}

export default Header;
