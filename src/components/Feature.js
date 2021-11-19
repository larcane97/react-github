import React from "react";
import styled, { css } from "styled-components";
import build from "../img/feature-tile__build.png";
import platform from "../img/feature-tile__platform.png";
import projects from "../img/feature-tile__projects.png";
import work from "../img/feature-tile__work.png";

const StyledFeature = styled.div`
  background: #f5f5f5;
  padding-top: 66px;
  .summary__title {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }

  .summary__description {
    max-width: 820px;
    margin: 0 auto;
    text-align: center;
  }

  .video {
    max-width: 650px;
    margin: 50px auto;

    & .video--ratio {
      height: 0;
      padding-top: 56.25;
      position: relative;
      & .iframe {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
  }

  .tiles {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    .inner {
      max-width: 1200px;
    }
    ul {
      /* display: flex; */
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      li {
        padding: 34px 24px;
        text-align: center;
        line-height: 1.5;
        border-right: 1px solid #e5e5e5;
        box-sizing: border-box;

        li:last-child {
          border-right: none;
        }

        img {
          max-width: 100%;
          padding: 14px 10% 24px;
          box-sizing: border-box;
        }
        h3 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
          color: #767676;
        }
      }
    }
  }
`;

function Feature() {
  return (
    <StyledFeature>
      <h2 className="summary__title">Welcome home, developers</h2>
      <p className="summary__description">
        GitHub fosters a fast, flexible, and collaborative development process
        that lets you work on your own or with others.
      </p>

      <div className="video">
        <div className="video--raito">
          <iframe
            width="633"
            height="356"
            src="https://www.youtube.com/embed/afvT1c1ii0c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="tiles">
        <div className="inner">
          <ul>
            <li>
              <img src={`${build}`} alt="build" />
              <h3>For everything you build</h3>
              <p>
                Host and manage your code on GitHub. You can keep your work
                private or share it with the world.
              </p>
            </li>
            <li>
              <img src={`${projects}`} alt="project" />
              <h3>A better way to work</h3>
              <p>
                From hobbyists to professionals, GitHub helps developers
                simplify the way they build software.
              </p>
            </li>
            <li>
              <img src={`${work}`} alt="work" />
              <h3>Millions of projects</h3>
              <p>
                GitHub is home to millions of open source projects. Try one out
                or get inspired to create your own.
              </p>
            </li>
            <li>
              <img src={`${platform}`} alt="platform" />
              <h3>One platform, from start to finish</h3>
              <p>
                With hundreds of integrations, GitHub is flexible enough to be
                at the center of your development process.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </StyledFeature>
  );
}

export default Feature;
