"use client";
import { createGlobalStyle, css } from "styled-components";
import Theme from "./Theme";
import Utils from "./Utils";

const Styles = css`
  //## Custom Fonts
  /* @font-face {
    font-family: "Pacaembu";
    src: url("/fonts/Pacaembu.woff2");
    font-style: bold;
    font-weight: 100 700;
    font-display: swap;
  } */
  // ## End base

  // ## Base
  html {
    font-size: 16px;
  }

  body,
  html {
    scroll-behavior: unset !important;
    // overflow-x: hidden !important;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--t-font-family-body);
    font-weight: 400;
    color: var(--t-body-color);
    line-height: var(--t-line-height-body);
    letter-spacing: var(--t-body-letter-spacing);
    font-synthesis: none !important;
    font-size: 16px;
  }

  .container {
    max-width: 1280px;
    // @media (min-width: 1470px) {
    //   max-width: 1450px;
    // }
  }

  img {
    max-width: 100%;
  }

  // ## End base

  // ## Typography

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    color: var(--t-heading-color);
    font-weight: var(--t-font-weight-heading);
    font-family: var(--t-font-family-heading);
    letter-spacing: var(--t-heading-letter-spacing);
  }

  h1,
  .h1 {
    font-size: var(--t-font-size-h1);
    line-height: var(--t-line-height-h1);
  }

  h2,
  .h2 {
    font-size: var(--t-font-size-h2);
    line-height: var(--t-line-height-h2);
  }

  h3,
  .h3 {
    font-size: var(--t-font-size-h3);
    line-height: var(--t-line-height-h3);
  }

  h4,
  .h4 {
    font-size: var(--t-font-size-h4);
    line-height: var(--t-line-height-h4);
  }

  h5,
  .h5 {
    font-size: var(--t-font-size-h5);
    line-height: var(--t-line-height-h5);
  }

  h6,
  .h6 {
    font-size: var(--t-font-size-h6);
    line-height: var(--t-line-height-h6);
  }

  a {
    color: var(--t-anchor-color);
    text-decoration: underline;
    &:hover,
    &:focus {
      text-decoration: underline;
      color: var(--t-anchor-hover-color);
    }
  }
  blockquote {
    border-left-color: var(--t-primary-branding-color);
  }
  button {
    outline: none;
    border: none;
    background: unset;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  ${Theme}
  ${Styles}
  ${Utils}
`;

export default GlobalStyles;
